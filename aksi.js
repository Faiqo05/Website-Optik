// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const mobileIcon = document.querySelector('.mobile-toggle i');
            if (mobileIcon) {
                mobileIcon.classList.remove('fa-times');
                mobileIcon.classList.add('fa-bars');
            }
        });
    });

    // Product Data
    const products = [
        {
            id: 1,
            name: "Kacamata Pria Classic",
            price: "Rp 450.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata pria dengan frame klasik yang elegan. Cocok untuk penggunaan sehari-hari dan acara formal.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Pria Classic seharga Rp 450.000. Bisa info lebih detail?"
        },
        {
            id: 2,
            name: "Kacamata Wanita Trendy",
            price: "Rp 520.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata wanita dengan desain trendy dan warna yang fashionable. Ringan dan nyaman dipakai seharian.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Wanita Trendy seharga Rp 520.000. Bisa info lebih detail?"
        },
        {
            id: 3,
            name: "Kacamata Anak Warna-warni",
            price: "Rp 350.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1588948831091-7e29e4d6d8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan frame warna-warni yang menarik. Dilengkapi dengan lensa anti gores yang aman.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Anak Warna-warni seharga Rp 350.000. Bisa info lebih detail?"
        },
        {
            id: 4,
            name: "Kacamata Hitam Premium",
            price: "Rp 650.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata hitam premium dengan lensa UV400 untuk perlindungan mata maksimal dari sinar matahari.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Hitam Premium seharga Rp 650.000. Bisa info lebih detail?"
        },
        {
            id: 5,
            name: "Kacamata Pria Modern",
            price: "Rp 480.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata pria dengan desain modern dan minimalis. Frame titanium yang ringan dan kuat.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Pria Modern seharga Rp 480.000. Bisa info lebih detail?"
        },
        {
            id: 6,
            name: "Kacamata Wanita Elegant",
            price: "Rp 550.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1390&q=80",
            description: "Kacamata wanita dengan frame elegant dan detail yang indah. Cocok untuk tampilan profesional.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Wanita Elegant seharga Rp 550.000. Bisa info lebih detail?"
        },
        {
            id: 7,
            name: "Kacamata Anak Sporty",
            price: "Rp 380.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan desain sporty dan frame fleksibel yang tahan banting.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Anak Sporty seharga Rp 380.000. Bisa info lebih detail?"
        },
        {
            id: 8,
            name: "Kacamata Hitam Fashion",
            price: "Rp 720.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
            description: "Kacamata hitam fashion dengan lensa polarized untuk mengurangi silau. Desain terkini yang stylish.",
            whatsappMessage: "Halo, saya tertarik dengan Kacamata Hitam Fashion seharga Rp 720.000. Bisa info lebih detail?"
        }
    ];

    // Render Products
    const productsGrid = document.querySelector('.products-grid');
    
    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Encode WhatsApp message for URL
            const whatsappMessage = encodeURIComponent(product.whatsappMessage);
            const whatsappLink = `https://wa.me/6282139309620?text=${whatsappMessage}`;
            
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <div class="product-buttons">
                        <button class="btn" onclick="showProductDetail(${product.id})">Lihat Detail</button>
                        <a href="${whatsappLink}" class="btn btn-accent" target="_blank">
                            <i class="fab fa-whatsapp"></i> Tanya via WA
                        </a>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Initial render
    renderProducts();

    // Product Filtering
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Render filtered products
            renderProducts(filter);
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // WhatsApp link generator for product detail
    window.generateWhatsAppLink = function(productName, productPrice) {
        const message = `Halo Optika Vision, saya ingin bertanya tentang produk: ${productName} (${productPrice})`;
        return `https://wa.me/6282139309620?text=${encodeURIComponent(message)}`;
    };
});

// Show Product Detail (global function)
function showProductDetail(id) {
    const products = [
        {
            id: 1,
            name: "Kacamata Pria Classic",
            price: "Rp 450.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata pria dengan frame klasik yang elegan. Cocok untuk penggunaan sehari-hari dan acara formal.",
            features: [
                "Frame: Metal klasik",
                "Lensa: Anti-reflektif",
                "Warna: Hitam, Emas, Perak",
                "Garansi: 1 tahun"
            ]
        },
        {
            id: 2,
            name: "Kacamata Wanita Trendy",
            price: "Rp 520.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata wanita dengan desain trendy dan warna yang fashionable. Ringan dan nyaman dipakai seharian.",
            features: [
                "Frame: Acetat ringan",
                "Lensa: Blue light filter",
                "Warna: Rose gold, Tortoise, Transparan",
                "Garansi: 1 tahun"
            ]
        },
        {
            id: 3,
            name: "Kacamata Anak Warna-warni",
            price: "Rp 350.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1588948831091-7e29e4d6d8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan frame warna-warni yang menarik. Dilengkapi dengan lensa anti gores yang aman.",
            features: [
                "Frame: Plastik fleksibel",
                "Lensa: Anti gores",
                "Warna: Biru, Merah, Hijau, Kuning",
                "Garansi: 2 tahun"
            ]
        },
        {
            id: 4,
            name: "Kacamata Hitam Premium",
            price: "Rp 650.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata hitam premium dengan lensa UV400 untuk perlindungan mata maksimal dari sinar matahari.",
            features: [
                "Frame: Titanium",
                "Lensa: UV400, Polarized",
                "Warna: Hitam, Coklat, Gradien",
                "Garansi: 1 tahun"
            ]
        },
        {
            id: 5,
            name: "Kacamata Pria Modern",
            price: "Rp 480.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata pria dengan desain modern dan minimalis. Frame titanium yang ringan dan kuat.",
            features: [
                "Frame: Titanium ringan",
                "Lensa: Anti-reflektif premium",
                "Warna: Gunmetal, Titanium, Hitam",
                "Garansi: 1.5 tahun"
            ]
        },
        {
            id: 6,
            name: "Kacamata Wanita Elegant",
            price: "Rp 550.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1390&q=80",
            description: "Kacamata wanita dengan frame elegant dan detail yang indah. Cocok untuk tampilan profesional.",
            features: [
                "Frame: Metal dengan detailing",
                "Lensa: Blue light filter premium",
                "Warna: Rose gold, Gold, Silver",
                "Garansi: 1 tahun"
            ]
        },
        {
            id: 7,
            name: "Kacamata Anak Sporty",
            price: "Rp 380.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan desain sporty dan frame fleksibel yang tahan banting.",
            features: [
                "Frame: TR90 fleksibel",
                "Lensa: Polycarbonate anti gores",
                "Warna: Biru, Merah, Hitam, Hijau",
                "Garansi: 2 tahun"
            ]
        },
        {
            id: 8,
            name: "Kacamata Hitam Fashion",
            price: "Rp 720.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
            description: "Kacamata hitam fashion dengan lensa polarized untuk mengurangi silau. Desain terkini yang stylish.",
            features: [
                "Frame: Acetat premium",
                "Lensa: Polarized dengan UV400",
                "Warna: Hitam, Coklat, Tortoise",
                "Garansi: 1 tahun"
            ]
        }
    ];

    const product = products.find(p => p.id === id);
    
    if (product) {
        // Generate WhatsApp message
        const whatsappMessage = `Halo Optika Vision, saya tertarik dengan produk: ${product.name} (${product.price}). Bisa info lebih detail?`;
        const whatsappLink = `https://wa.me/6282139309620?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Create modal HTML
        const modalHTML = `
            <div class="product-modal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                padding: 20px;
            ">
                <div class="modal-content" style="
                    background-color: white;
                    border-radius: 10px;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                ">
                    <button class="close-modal" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                        color: #333;
                        z-index: 10;
                    ">&times;</button>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding: 40px;">
                        <div>
                            <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
                            <a href="${whatsappLink}" class="whatsapp-btn-modal" style="
                                display: block;
                                background-color: #25D366;
                                color: white;
                                text-align: center;
                                padding: 15px;
                                border-radius: 8px;
                                font-weight: 600;
                                margin-top: 15px;
                                transition: all 0.3s;
                                text-decoration: none;
                            " target="_blank" onmouseover="this.style.backgroundColor='#128C7E'" onmouseout="this.style.backgroundColor='#25D366'">
                                <i class="fab fa-whatsapp"></i> Tanya atau Pesan via WhatsApp
                            </a>
                        </div>
                        <div>
                            <h2 style="margin-bottom: 15px; color: #1e293b;">${product.name}</h2>
                            <div style="font-size: 1.8rem; color: #2563eb; font-weight: 600; margin-bottom: 20px;">${product.price}</div>
                            <div style="margin-bottom: 25px;">
                                <strong>Kategori:</strong> 
                                <span style="
                                    background-color: #e0f2fe;
                                    color: #0369a1;
                                    padding: 5px 15px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    margin-left: 10px;
                                    font-weight: 500;
                                ">${product.category}</span>
                            </div>
                            <p style="line-height: 1.7; color: #334155; margin-bottom: 30px; font-size: 1.05rem;">${product.description}</p>
                            
                            <div style="margin-bottom: 25px;">
                                <h4 style="margin-bottom: 15px; font-size: 1.2rem;">Spesifikasi:</h4>
                                <ul style="list-style-type: none; padding-left: 0;">
                                    ${product.features.map(feature => `
                                        <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                            <i class="fas fa-check-circle" style="color: #25D366; margin-right: 10px; margin-top: 3px;"></i>
                                            <span>${feature}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 30px;">
                                <h4 style="margin-bottom: 10px; color: #0369a1;">
                                    <i class="fas fa-shipping-fast"></i> Informasi Pengiriman
                                </h4>
                                <p style="margin-bottom: 8px; color: #334155;">
                                    <i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i>
                                    Gratis ongkir wilayah Jakarta
                                </p>
                                <p style="margin-bottom: 8px; color: #334155;">
                                    <i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i>
                                    Pengiriman 1-2 hari kerja
                                </p>
                                <p style="color: #334155;">
                                    <i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i>
                                    Bisa COD untuk area tertentu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to body
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;
        document.body.appendChild(modalContainer);
        
        // Add event listener to close button
        const closeButton = modalContainer.querySelector('.close-modal');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modalContainer);
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside content
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                document.body.removeChild(modalContainer);
                document.body.style.overflow = 'auto';
            }
        });
        
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}