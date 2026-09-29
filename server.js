const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// PostgreSQL Connection
// ===============================

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


// ===============================
// Test PostgreSQL Connection
// ===============================

pool.connect()
    .then(client => {
        console.log("✅ PostgreSQL Connected Successfully!");
        client.release();
    })
    .catch(error => {
        console.error("❌ PostgreSQL Connection Failed:");
        console.error(error.message);
    });


// ===============================
// Create Orders Table
// ===============================

async function createOrdersTable() {

    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id VARCHAR(100) PRIMARY KEY,
                customer_name VARCHAR(150),
                phone VARCHAR(30),
                address TEXT,
                items JSONB,
                total NUMERIC(10,2),
                payment_status VARCHAR(50) DEFAULT 'Pending',
                utr VARCHAR(100),
                order_status VARCHAR(50) DEFAULT 'Pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log("✅ Orders table is ready!");

    } catch (error) {

        console.error("❌ Table creation failed:");
        console.error(error.message);

    }

}


// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {

    res.json({
        message: "Nepali Food Junction Backend is Running!"
    });

});


// ===============================
// GET ALL ORDERS
// ===============================

app.get("/api/orders", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                id,
                customer_name AS "customerName",
                phone,
                address,
                items,
                total,
                payment_status AS "paymentStatus",
                utr,
                order_status AS "orderStatus",
                created_at AS "createdAt"
            FROM orders
            ORDER BY created_at DESC
        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Orders fetch nahi ho paye"
        });

    }

});


// ===============================
// CREATE NEW ORDER
// ===============================

app.post("/api/orders", async (req, res) => {

    try {

        const {
            customerName,
            phone,
            address,
            items,
            total,
            paymentStatus,
            utr
        } = req.body;

        const orderID = "NFJ-" + Date.now();

        const result = await pool.query(
            `
            INSERT INTO orders
            (
                id,
                customer_name,
                phone,
                address,
                items,
                total,
                payment_status,
                utr,
                order_status
            )
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING
                id,
                customer_name AS "customerName",
                phone,
                address,
                items,
                total,
                payment_status AS "paymentStatus",
                utr,
                order_status AS "orderStatus",
                created_at AS "createdAt"
            `,
            [
                orderID,
                customerName,
                phone,
                address,
                JSON.stringify(items),
                total,
                paymentStatus || "Pending",
                utr || "",
                "Pending"
            ]
        );

        res.status(201).json({

            success: true,

            message: "Order created successfully",

            order: result.rows[0]

        });

    } catch (error) {

        console.error("❌ Order save error:");
        console.error(error);

        res.status(500).json({

            success: false,

            message: "Order database mein save nahi hua"

        });

    }

});


// ===============================
// UPDATE ORDER STATUS
// ===============================

app.patch("/api/orders/:id/status", async (req, res) => {

    try {

        const orderID = req.params.id;
        const newStatus = req.body.status;

        const result = await pool.query(
            `
            UPDATE orders
            SET order_status = $1
            WHERE id = $2
            RETURNING
                id,
                customer_name AS "customerName",
                phone,
                address,
                items,
                total,
                payment_status AS "paymentStatus",
                utr,
                order_status AS "orderStatus",
                created_at AS "createdAt"
            `,
            [newStatus, orderID]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({

                success: false,

                message: "Order not found"

            });

        }

        res.json({

            success: true,

            message: "Order status updated",

            order: result.rows[0]

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Order status update nahi hua"

        });

    }

});


// ===============================
// START SERVER
// ===============================

const PORT = 5000;

async function startServer() {

    await createOrdersTable();

    app.listen(PORT, () => {

        console.log(
            `🚀 Server running on http://localhost:${PORT}`
        );

    });

}

startServer();