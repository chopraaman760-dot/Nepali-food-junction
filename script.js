/* =========================
   CONFIRM ORDER
========================= */

function confirmOrder(){

    // Check cart
    if(cart.length === 0){

        alert("Cart is empty.");

        return;
    }


    // Get UTR
    const utr =
        document
        .getElementById("utrNumber")
        .value
        .trim();


    // Check UTR
    if(!utr){

        alert(
            "Please enter UTR / Transaction ID."
        );

        return;
    }


    // Generate Order ID
    const orderID =
        generateOrderID();


    // Get total
    const total =
        getCartTotal();


    // Prepare order data
    const orderData = {

        customerName:
            customerDetails.name,

        phone:
            customerDetails.phone,

        address:
            customerDetails.address,

        items:
            cart,

        total:
            total,

        paymentStatus:
            "Paid",

        utr:
            utr
    };


    console.log(
        "Sending order to backend:",
        orderData
    );


    // Send order to Node.js Backend
    fetch(
        "http://localhost:5000/api/orders",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body:
                JSON.stringify(orderData)
        }
    )


    // Backend response
    .then(function(response){

        if(!response.ok){

            throw new Error(
                "Backend request failed"
            );
        }

        return response.json();

    })


    // Order successfully saved
    .then(function(data){

        console.log(
            "Backend response:",
            data
        );


        // Use backend Order ID
        const backendOrderID =
            data.order.id;


        /* =========================
           WHATSAPP MESSAGE
        ========================= */

        let message =
            "🍜 *NEW ORDER - NEPALI FOOD JUNCTION*%0A%0A";


        message +=
            "🆔 Order ID: " +
            encodeURIComponent(
                backendOrderID
            ) +
            "%0A";


        message +=
            "👤 Customer: " +
            encodeURIComponent(
                customerDetails.name
            ) +
            "%0A";


        message +=
            "📞 Phone: " +
            encodeURIComponent(
                customerDetails.phone
            ) +
            "%0A";


        message +=
            "📍 Address: " +
            encodeURIComponent(
                customerDetails.address
            ) +
            "%0A%0A";


        message +=
            "🍽️ *ORDER ITEMS*%0A";


        // Add all cart items
        cart.forEach(function(item){

            message +=
                "• " +
                encodeURIComponent(
                    item.name
                ) +
                " × " +
                item.qty +
                " = ₹" +
                (
                    item.price *
                    item.qty
                ) +
                "%0A";

        });


        // Total
        message +=
            "%0A💰 *TOTAL: ₹" +
            total +
            "*%0A";


        // UTR
        message +=
            "💳 UTR: " +
            encodeURIComponent(
                utr
            ) +
            "%0A";


        message +=
            "%0AThank you for ordering from Nepali Food Junction ❤️";


        /* =========================
           OPEN WHATSAPP
        ========================= */

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            message;


        window.open(
            whatsappURL,
            "_blank"
        );


        /* =========================
           SUCCESS MESSAGE
        ========================= */

        alert(
            "✅ Order successfully received!\n\n" +
            "Order ID: " +
            backendOrderID
        );

    })


    // Backend connection error
    .catch(function(error){

        console.error(
            "Order Error:",
            error
        );


        alert(
            "❌ Order server se connect nahi ho paya.\n\n" +
            "Please make sure Node.js Backend Server is running."
        );

    });

}