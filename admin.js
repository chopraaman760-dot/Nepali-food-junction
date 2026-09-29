/* =====================================================
   NEPALI FOOD JUNCTION
   ADMIN PANEL - BACKEND CONNECTED VERSION
===================================================== */


/* =====================================================
   BACKEND URL
===================================================== */

const API_URL = "http://localhost:5000";


/* =====================================================
   ORDERS
===================================================== */

// Orders will now come from backend
let orders = [];


/* =====================================================
   MENU DATA
===================================================== */

let menuItems = [

    {
        id: 1,
        name: "Veg Soup",
        category: "Soup",
        price: 80,
        description: "Hot vegetable soup",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600"
    },

    {
        id: 2,
        name: "Chicken Soup",
        category: "Soup",
        price: 100,
        description: "Hot chicken soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600"
    },

    {
        id: 3,
        name: "Veg Chowmein",
        category: "Chowmein",
        price: 70,
        description: "Nepali style vegetable chowmein",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600"
    },

    {
        id: 4,
        name: "Chicken Chowmein",
        category: "Chowmein",
        price: 100,
        description: "Chicken chowmein",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600"
    },

    {
        id: 5,
        name: "Veg Steam Momos",
        category: "Momos",
        price: 80,
        description: "Steamed vegetable momos",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600"
    },

    {
        id: 6,
        name: "Chicken Steam Momos",
        category: "Momos",
        price: 100,
        description: "Steamed chicken momos",
        image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=600"
    },

    {
        id: 7,
        name: "Chicken Fried Momos",
        category: "Momos",
        price: 120,
        description: "Crispy fried chicken momos",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600"
    },

    {
        id: 8,
        name: "Chilli Momos",
        category: "Momos",
        price: 130,
        description: "Spicy chilli momos",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600"
    },

    {
        id: 9,
        name: "Veg Roll",
        category: "Rolls",
        price: 70,
        description: "Crispy vegetable roll",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600"
    },

    {
        id: 10,
        name: "Paneer Roll",
        category: "Rolls",
        price: 90,
        description: "Paneer filled roll",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },

    {
        id: 11,
        name: "Chicken Roll",
        category: "Rolls",
        price: 110,
        description: "Chicken filled roll",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600"
    },

    {
        id: 12,
        name: "Chilli Paneer Dry",
        category: "Paneer",
        price: 140,
        description: "Crispy chilli paneer",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },

    {
        id: 13,
        name: "Chilli Paneer Gravy",
        category: "Paneer",
        price: 150,
        description: "Chilli paneer with gravy",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },

    {
        id: 14,
        name: "Chilli Garlic Paneer",
        category: "Paneer",
        price: 160,
        description: "Spicy chilli garlic paneer",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },

    {
        id: 15,
        name: "Veg Fried Rice",
        category: "Fried Rice",
        price: 80,
        description: "Vegetable fried rice",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },

    {
        id: 16,
        name: "Egg Fried Rice",
        category: "Fried Rice",
        price: 100,
        description: "Egg fried rice",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },

    {
        id: 17,
        name: "Chicken Fried Rice",
        category: "Fried Rice",
        price: 120,
        description: "Chicken fried rice",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },

    {
        id: 18,
        name: "Veg Manchurian Dry",
        category: "Manchurian",
        price: 120,
        description: "Crispy veg manchurian",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600"
    },

    {
        id: 19,
        name: "Veg Manchurian Gravy",
        category: "Manchurian",
        price: 130,
        description: "Manchurian with gravy",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600"
    },

    {
        id: 20,
        name: "Chicken Manchurian",
        category: "Manchurian",
        price: 160,
        description: "Chicken manchurian",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600"
    }

];


/* =====================================================
   CUSTOMERS
===================================================== */

let customers = [];


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showSection(sectionId, clickedButton) {

    const sections =
        document.querySelectorAll(".content-section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    const selectedSection =
        document.getElementById(sectionId);


    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    const buttons =
        document.querySelectorAll(".menu-item");


    buttons.forEach(button => {
        button.classList.remove("active");
    });


    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    const titles = {

        dashboard: [
            "Dashboard",
            "Welcome back, Admin 👋"
        ],

        orders: [
            "Orders",
            "Manage customer orders."
        ],

        menu: [
            "Menu Management",
            "Manage restaurant menu."
        ],

        customers: [
            "Customers",
            "View your customer database."
        ],

        payments: [
            "Payments",
            "Track payment transactions."
        ],

        reports: [
            "Reports",
            "Restaurant sales overview."
        ],

        settings: [
            "Settings",
            "Manage restaurant settings."
        ]

    };


    if (titles[sectionId]) {

        document.getElementById("pageTitle").innerText =
            titles[sectionId][0];

        document.getElementById("pageSubtitle").innerText =
            titles[sectionId][1];
    }


    if (window.innerWidth <= 800) {

        document
            .getElementById("sidebar")
            .classList.remove("open");

    }


    if (sectionId === "dashboard") {

        loadRecentOrders();

    }


    if (sectionId === "orders") {

        loadOrders();

    }


    if (sectionId === "menu") {

        loadMenu();

    }


    if (sectionId === "customers") {

        loadCustomers();

    }

}


/* =====================================================
   SIDEBAR
===================================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("open");

}


/* =====================================================
   GET ORDERS FROM BACKEND
===================================================== */

async function fetchOrders() {

    try {

        const response =
            await fetch(
                `${API_URL}/api/orders`
            );


        if (!response.ok) {

            throw new Error(
                "Could not fetch orders"
            );

        }


        const backendOrders =
            await response.json();


        /*
         Convert backend format
         to Admin Panel format
        */

        orders =
            backendOrders.map(order => {

                return {

                    id:
                        order.id,

                    customer:
                        order.customerName,

                    phone:
                        order.phone,

                    address:
                        order.address,

                    items:
                        order.items
                            .map(item =>
                                `${item.name} × ${item.qty}`
                            )
                            .join(" + "),

                    amount:
                        order.total,

                    payment:
                        order.paymentStatus ||
                        "Pending",

                    status:
                        convertStatus(
                            order.orderStatus
                        ),

                    time:
                        formatOrderTime(
                            order.createdAt
                        ),

                    utr:
                        order.utr || ""

                };

            });


        console.log(
            "Orders loaded:",
            orders
        );


        loadRecentOrders();


        /*
         If Orders page is currently open
        */

        const ordersSection =
            document.getElementById("orders");


        if (
            ordersSection &&
            ordersSection.classList.contains(
                "active-section"
            )
        ) {

            loadOrders();

        }


    } catch(error) {

        console.error(
            "Backend Error:",
            error
        );


        console.log(
            "Backend server is not available."
        );

    }

}


/* =====================================================
   STATUS CONVERSION
===================================================== */

function convertStatus(status) {

    if (!status) {
        return "pending";
    }


    const value =
        status.toLowerCase();


    if (value === "pending") {
        return "pending";
    }


    if (value === "preparing") {
        return "preparing";
    }


    if (
        value === "completed" ||
        value === "delivered"
    ) {

        return "completed";

    }


    if (value === "cancelled") {
        return "cancelled";
    }


    return "pending";

}


/* =====================================================
   TIME FORMAT
===================================================== */

function formatOrderTime(dateValue) {

    if (!dateValue) {
        return "";
    }


    const date =
        new Date(dateValue);


    if (isNaN(date.getTime())) {
        return "";
    }


    return date.toLocaleString(
        "en-IN",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    );

}


/* =====================================================
   DASHBOARD
===================================================== */

function loadRecentOrders() {

    const table =
        document.getElementById(
            "recentOrdersTable"
        );


    if (!table) return;


    table.innerHTML = "";


    orders
        .slice(0, 5)
        .forEach(order => {

            table.innerHTML += `

                <tr>

                    <td>
                        <strong>
                            ${order.id}
                        </strong>
                    </td>

                    <td>
                        ${order.customer}
                    </td>

                    <td>
                        ₹${order.amount}
                    </td>

                    <td>
                        <span class="status ${order.status}">
                            ${formatStatus(order.status)}
                        </span>
                    </td>

                </tr>

            `;

        });


    if (orders.length === 0) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    style="text-align:center;padding:30px;"
                >
                    No orders yet.
                </td>

            </tr>

        `;

    }

}


/* =====================================================
   REFRESH DASHBOARD
===================================================== */

function refreshDashboard() {

    fetchOrders();

}


/* =====================================================
   ORDERS
===================================================== */

function loadOrders() {

    const table =
        document.getElementById(
            "ordersTable"
        );


    if (!table) return;


    table.innerHTML = "";


    if (orders.length === 0) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="text-align:center;padding:30px;"
                >
                    No orders found.
                </td>

            </tr>

        `;

        return;

    }


    orders.forEach(order => {

        table.innerHTML +=
            createOrderRow(order);

    });

}


/* =====================================================
   CREATE ORDER ROW
===================================================== */

function createOrderRow(order) {

    return `

        <tr>

            <td>

                <strong>
                    ${order.id}
                </strong>

                <small
                    style="
                    display:block;
                    color:#999;
                    margin-top:4px;
                    "
                >
                    ${order.time}
                </small>

            </td>


            <td>

                <strong>
                    ${order.customer}
                </strong>

                <small
                    style="
                    display:block;
                    color:#999;
                    margin-top:4px;
                    "
                >
                    ${order.phone}
                </small>

            </td>


            <td>
                ${order.items}
            </td>


            <td>

                <strong>
                    ₹${order.amount}
                </strong>

            </td>


            <td>

                <span
                    class="status ${
                        order.payment === "Paid"
                        ? "completed"
                        : "pending"
                    }"
                >

                    ${order.payment}

                </span>

            </td>


            <td>

                <select
                    onchange="
                        changeOrderStatus(
                            '${order.id}',
                            this.value
                        )
                    "

                    style="
                        border:1px solid #ddd;
                        padding:6px;
                        border-radius:6px;
                        font-size:11px;
                    "
                >

                    <option
                        value="pending"
                        ${
                            order.status === "pending"
                            ? "selected"
                            : ""
                        }
                    >
                        Pending
                    </option>


                    <option
                        value="preparing"
                        ${
                            order.status === "preparing"
                            ? "selected"
                            : ""
                        }
                    >
                        Preparing
                    </option>


                    <option
                        value="completed"
                        ${
                            order.status === "completed"
                            ? "selected"
                            : ""
                        }
                    >
                        Completed
                    </option>


                    <option
                        value="cancelled"
                        ${
                            order.status === "cancelled"
                            ? "selected"
                            : ""
                        }
                    >
                        Cancelled
                    </option>

                </select>

            </td>


            <td>

                <button
                    onclick="
                        viewOrder('${order.id}')
                    "

                    style="
                        border:none;
                        background:#eef4ff;
                        color:#2563eb;
                        padding:7px 10px;
                        border-radius:6px;
                    "
                >

                    <i class="fa-solid fa-eye"></i>

                </button>

            </td>

        </tr>

    `;

}


/* =====================================================
   CHANGE ORDER STATUS
===================================================== */

async function changeOrderStatus(
    orderId,
    newStatus
) {

    try {

        const response =
            await fetch(
                `${API_URL}/api/orders/${orderId}/status`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        status: newStatus
                    })

                }
            );


        if (!response.ok) {

            throw new Error(
                "Status update failed"
            );

        }


        /*
         Update local order
        */

        const order =
            orders.find(
                item =>
                    item.id === orderId
            );


        if (order) {

            order.status =
                convertStatus(
                    newStatus
                );

        }


        loadOrders();

        loadRecentOrders();


    } catch(error) {

        console.error(
            "Status Error:",
            error
        );


        alert(
            "Order status update nahi hua."
        );

    }

}


/* =====================================================
   FORMAT STATUS
===================================================== */

function formatStatus(status) {

    const names = {

        pending:
            "Pending",

        preparing:
            "Preparing",

        completed:
            "Completed",

        cancelled:
            "Cancelled"

    };


    return names[status] || status;

}


/* =====================================================
   ORDER SEARCH
===================================================== */

function searchOrders() {

    const search =
        document
            .getElementById("orderSearch")
            .value
            .toLowerCase();


    const filter =
        document
            .getElementById(
                "orderStatusFilter"
            )
            .value;


    const table =
        document.getElementById(
            "ordersTable"
        );


    if (!table) return;


    table.innerHTML = "";


    const filtered =
        orders.filter(order => {

            const matchesSearch =

                order.id
                    .toLowerCase()
                    .includes(search)

                ||

                order.customer
                    .toLowerCase()
                    .includes(search);


            const matchesStatus =

                filter === "all"

                ||

                order.status === filter;


            return (
                matchesSearch &&
                matchesStatus
            );

        });


    filtered.forEach(order => {

        table.innerHTML +=
            createOrderRow(order);

    });


    if (filtered.length === 0) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="
                    text-align:center;
                    padding:30px;
                    "
                >
                    No matching orders.
                </td>

            </tr>

        `;

    }

}


function filterOrders() {

    searchOrders();

}


/* =====================================================
   VIEW ORDER
===================================================== */

function viewOrder(orderId) {

    const order =
        orders.find(
            item =>
                item.id === orderId
        );


    if (!order) return;


    document
        .getElementById("orderModalId")
        .innerText =
        order.id;


    document
        .getElementById("orderDetails")
        .innerHTML = `

        <div class="order-detail-row">

            <strong>
                Customer
            </strong>

            <span>
                ${order.customer}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Mobile
            </strong>

            <span>
                ${order.phone}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Address
            </strong>

            <span>
                ${order.address || "Not available"}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Items
            </strong>

            <span>
                ${order.items}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Total
            </strong>

            <span>
                ₹${order.amount}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Payment
            </strong>

            <span>
                ${order.payment}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                UTR
            </strong>

            <span>
                ${order.utr || "Not available"}
            </span>

        </div>


        <div class="order-detail-row">

            <strong>
                Status
            </strong>

            <span>

                <span
                    class="status ${order.status}"
                >
                    ${formatStatus(order.status)}
                </span>

            </span>

        </div>

    `;


    document
        .getElementById("orderModal")
        .classList.add("show");

}


/* =====================================================
   CLOSE ORDER MODAL
===================================================== */

function closeOrderModal() {

    document
        .getElementById("orderModal")
        .classList.remove("show");

}


/* =====================================================
   MENU
===================================================== */

function loadMenu() {

    renderMenu(menuItems);

}


function renderMenu(items) {

    const grid =
        document.getElementById(
            "menuGrid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    if (items.length === 0) {

        grid.innerHTML = `

            <div
                style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                color:#777;
                "
            >

                No menu items found.

            </div>

        `;

        return;

    }


    items.forEach(item => {

        grid.innerHTML += `

            <div class="menu-card">

                <div class="menu-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"

                        onerror="
                            this.src=
                            'https://via.placeholder.com/600x400?text=Food'
                        "
                    >

                </div>


                <div class="menu-card-body">

                    <h3>
                        ${item.name}
                    </h3>


                    <span class="menu-category">
                        ${item.category}
                    </span>


                    <div class="menu-price">
                        ₹${item.price}
                    </div>


                    <div class="menu-actions">

                        <button
                            class="edit-btn"
                            onclick="
                                editMenuItem(
                                    ${item.id}
                                )
                            "
                        >

                            <i class="fa-solid fa-pen"></i>

                            Edit

                        </button>


                        <button
                            class="delete-btn"
                            onclick="
                                deleteMenuItem(
                                    ${item.id}
                                )
                            "
                        >

                            <i class="fa-solid fa-trash"></i>

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


function searchMenu() {

    const search =
        document
            .getElementById("menuSearch")
            .value
            .toLowerCase();


    const category =
        document
            .getElementById(
                "categoryFilter"
            )
            .value;


    const filtered =
        menuItems.filter(item => {

            const matchSearch =
                item.name
                    .toLowerCase()
                    .includes(search);


            const matchCategory =
                category === "all"
                ||
                item.category === category;


            return (
                matchSearch &&
                matchCategory
            );

        });


    renderMenu(filtered);

}


function filterMenu() {

    searchMenu();

}


/* =====================================================
   ADD MENU
===================================================== */

function openAddMenuModal() {

    document
        .getElementById("menuForm")
        .reset();


    document
        .querySelector("#menuModal h2")
        .innerText =
        "Add Menu Item";


    document
        .getElementById("menuModal")
        .classList.add("show");

}


function closeMenuModal() {

    document
        .getElementById("menuModal")
        .classList.remove("show");

}


function addMenuItem(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("foodName")
            .value
            .trim();


    const category =
        document
            .getElementById("foodCategory")
            .value;


    const price =
        Number(
            document
                .getElementById("foodPrice")
                .value
        );


    const description =
        document
            .getElementById("foodDescription")
            .value
            .trim();


    const image =
        document
            .getElementById("foodImage")
            .value
            .trim();


    const newItem = {

        id: Date.now(),

        name: name,

        category: category,

        price: price,

        description: description,

        image:
            image ||
            "https://via.placeholder.com/600x400?text=Food"

    };


    menuItems.push(newItem);


    closeMenuModal();


    loadMenu();


    alert(
        "Menu item added successfully."
    );

}


/* =====================================================
   DELETE MENU
===================================================== */

function deleteMenuItem(id) {

    const item =
        menuItems.find(
            menu =>
                menu.id === id
        );


    if (!item) return;


    const confirmDelete =
        confirm(
            `Delete "${item.name}"?`
        );


    if (!confirmDelete) return;


    menuItems =
        menuItems.filter(
            menu =>
                menu.id !== id
        );


    loadMenu();

}


/* =====================================================
   EDIT MENU
===================================================== */

function editMenuItem(id) {

    const item =
        menuItems.find(
            menu =>
                menu.id === id
        );


    if (!item) return;


    const newPrice =
        prompt(
            `Enter new price for ${item.name}`,
            item.price
        );


    if (newPrice === null) return;


    const price =
        Number(newPrice);


    if (
        isNaN(price) ||
        price <= 0
    ) {

        alert(
            "Please enter a valid price."
        );

        return;

    }


    item.price = price;


    loadMenu();


    alert(
        "Price updated successfully."
    );

}


/* =====================================================
   CUSTOMERS
===================================================== */

function loadCustomers() {

    /*
       Customers will be built
       from real orders later.
    */

    renderCustomers(customers);

}


function renderCustomers(list) {

    const table =
        document.getElementById(
            "customersTable"
        );


    if (!table) return;


    table.innerHTML = "";


    list.forEach(customer => {

        table.innerHTML += `

            <tr>

                <td>
                    <strong>
                        ${customer.name}
                    </strong>
                </td>

                <td>
                    ${customer.phone}
                </td>

                <td>
                    ${customer.orders}
                </td>

                <td>
                    ₹${customer.spent}
                </td>

                <td>
                    ${customer.lastOrder}
                </td>

            </tr>

        `;

    });


    if (list.length === 0) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    style="
                    text-align:center;
                    padding:30px;
                    "
                >
                    No customers yet.
                </td>

            </tr>

        `;

    }

}


function searchCustomers() {

    const search =
        document
            .getElementById(
                "customerSearch"
            )
            .value
            .toLowerCase();


    const filtered =
        customers.filter(
            customer =>

                customer.name
                    .toLowerCase()
                    .includes(search)

                ||

                customer.phone
                    .includes(search)
        );


    renderCustomers(filtered);

}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function showNotifications() {

    alert(
        "Notifications:\n\n" +
        "Orders are loaded from Backend."
    );

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) return;


    alert(
        "Logout system will be connected to backend later."
    );

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Load real orders
        fetchOrders();

        // Load menu
        loadMenu();

    }
);