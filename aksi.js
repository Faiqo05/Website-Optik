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
            description: "Kacamata pria dengan frame klasik yang elegan. Cocok untuk penggunaan sehari-hari dan acara formal."
        },
        {
            id: 2,
            name: "Kacamata Wanita Trendy",
            price: "Rp 520.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata wanita dengan desain trendy dan warna yang fashionable. Ringan dan nyaman dipakai seharian."
        },
        {
            id: 3,
            name: "Kacamata Anak Warna-warni",
            price: "Rp 350.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1588948831091-7e29e4d6d8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan frame warna-warni yang menarik. Dilengkapi dengan lensa anti gores yang aman."
        },
        {
            id: 4,
            name: "Kacamata Hitam Premium",
            price: "Rp 650.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata hitam premium dengan lensa UV400 untuk perlindungan mata maksimal dari sinar matahari."
        },
        {
            id: 5,
            name: "Kacamata Pria Modern",
            price: "Rp 480.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata pria dengan desain modern dan minimalis. Frame titanium yang ringan dan kuat."
        },
        {
            id: 6,
            name: "Kacamata Wanita Elegant",
            price: "Rp 550.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1390&q=80",
            description: "Kacamata wanita dengan frame elegant dan detail yang indah. Cocok untuk tampilan profesional."
        },
        {
            id: 7,
            name: "Kacamata Anak Sporty",
            price: "Rp 380.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan desain sporty dan frame fleksibel yang tahan banting."
        },
        {
            id: 8,
            name: "Kacamata Hitam Fashion",
            price: "Rp 720.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
            description: "Kacamata hitam fashion dengan lensa polarized untuk mengurangi silau. Desain terkini yang stylish."
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
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <button class="btn btn-accent" onclick="showProductDetail(${product.id})">Lihat Detail</button>
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

    // Form Submission
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                alert('Harap lengkapi semua field!');
                return;
            }
            
            // Show success message
            alert(`Terima kasih ${name}! Pesan konsultasi Anda telah dikirim.\nKami akan menghubungi Anda di ${phone} atau ${email} dalam waktu 1x24 jam.`);
            
            // Reset form
            this.reset();
            
            // Log to console (for demo)
            console.log('Form submitted:', { name, email, phone, message });
        });
    }

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

    // Add current year to footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Show Product Detail (global function)
function showProductDetail(id) {
    // Product data (same as in script.js)
    const products = [
        {
            id: 1,
            name: "Kacamata Pria Classic",
            price: "Rp 450.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata pria dengan frame klasik yang elegan. Cocok untuk penggunaan sehari-hari dan acara formal."
        },
        {
            id: 2,
            name: "Kacamata Wanita Trendy",
            price: "Rp 520.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata wanita dengan desain trendy dan warna yang fashionable. Ringan dan nyaman dipakai seharian."
        },
        {
            id: 3,
            name: "Kacamata Anak Warna-warni",
            price: "Rp 350.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1588948831091-7e29e4d6d8c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan frame warna-warni yang menarik. Dilengkapi dengan lensa anti gores yang aman."
        },
        {
            id: 4,
            name: "Kacamata Hitam Premium",
            price: "Rp 650.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            description: "Kacamata hitam premium dengan lensa UV400 untuk perlindungan mata maksimal dari sinar matahari."
        },
        {
            id: 5,
            name: "Kacamata Pria Modern",
            price: "Rp 480.000",
            category: "pria",
            image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata pria dengan desain modern dan minimalis. Frame titanium yang ringan dan kuat."
        },
        {
            id: 6,
            name: "Kacamata Wanita Elegant",
            price: "Rp 550.000",
            category: "wanita",
            image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1390&q=80",
            description: "Kacamata wanita dengan frame elegant dan detail yang indah. Cocok untuk tampilan profesional."
        },
        {
            id: 7,
            name: "Kacamata Anak Sporty",
            price: "Rp 380.000",
            category: "anak",
            image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            description: "Kacamata anak dengan desain sporty dan frame fleksibel yang tahan banting."
        },
        {
            id: 8,
            name: "Kacamata Hitam Fashion",
            price: "Rp 720.000",
            category: "sunglasses",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
            description: "Kacamata hitam fashion dengan lensa polarized untuk mengurangi silau. Desain terkini yang stylish."
        }
    ];

    const product = products.find(p => p.id === id);
    
    if (product) {
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
                    max-width: 800px;
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
                            <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
                        </div>
                        <div>
                            <h2 style="margin-bottom: 15px; color: #1e293b;">${product.name}</h2>
                            <div style="font-size: 1.5rem; color: #2563eb; font-weight: 600; margin-bottom: 20px;">${product.price}</div>
                            <div style="margin-bottom: 25px;">
                                <strong>Kategori:</strong> 
                                <span style="
                                    background-color: #e0f2fe;
                                    color: #0369a1;
                                    padding: 5px 10px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    margin-left: 10px;
                                ">${product.category}</span>
                            </div>
                            <p style="line-height: 1.7; color: #334155; margin-bottom: 30px;">${product.description}</p>
                            
                            <div style="margin-bottom: 25px;">
                                <h4 style="margin-bottom: 10px;">Spesifikasi:</h4>
                                <ul style="list-style-type: none; padding-left: 0;">
                                    <li style="margin-bottom: 8px;">✓ Lensa anti-reflektif</li>
                                    <li style="margin-bottom: 8px;">✓ Frame ringan dan tahan lama</li>
                                    <li style="margin-bottom: 8px;">✓ Garansi 1 tahun</li>
                                    <li style="margin-bottom: 8px;">✓ Free case dan kain pembersih</li>
                                </ul>
                            </div>
                            
                            <button class="btn" style="
                                background-color: #f59e0b;
                                color: white;
                                border: none;
                                padding: 12px 30px;
                                border-radius: 30px;
                                font-size: 1rem;
                                cursor: pointer;
                                width: 100%;
                            " onclick="alert('Fitur pemesanan online akan segera tersedia! Hubungi kami di (021) 555-1234 untuk pemesanan.')">Pesan Sekarang</button>
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
        });
        
        // Close modal when clicking outside content
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                document.body.removeChild(modalContainer);
            }
        });
        
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Restore scrolling when modal is closed
        const restoreScroll = () => {
            document.body.style.overflow = 'auto';
        };
        
        closeButton.addEventListener('click', restoreScroll);
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                restoreScroll();
            }
        });
    }
}