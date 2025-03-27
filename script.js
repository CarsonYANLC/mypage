document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const courseListContainer = document.getElementById('course-list');
    const multiLinkSelector = document.getElementById('multi-link-selector');
    const courseContent = document.getElementById('course-content');
    const courseIframe = document.getElementById('course-iframe');
    const backButton = document.getElementById('back-button');

    // Function to set iframe size based on window dimensions
    function setIframeSize() {
        const windowHeight = window.innerHeight;
        const headerHeight = 120; // Approximate header height
        const footerHeight = 60; // Approximate footer height
        const padding = 20; // Extra padding
        
        const iframeHeight = windowHeight - headerHeight - footerHeight - padding;
        courseIframe.style.height = `${iframeHeight}px`;
    }

    // Call the function on load and resize
    window.addEventListener('resize', setIframeSize);
    setIframeSize();

    // Course data with titles, descriptions, and links
    const courses = [
        {
            id: 1,
            title: "监督学习 vs 无监督学习",
            description: "Supervised Learning vs Unsupervised Learning",
            icon: icons.supervised,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/1_ml_basic.html", label: "监督学习与无监督学习基础" }
            ]
        },
        {
            id: 2,
            title: "强化学习",
            description: "Reinforcement Learning",
            icon: icons.reinforcement,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/2_rl.html", label: "强化学习基础" },
                { url: "https://flo.host/MnC7tu9/", label: "强化学习进阶" }
            ]
        },
        {
            id: 3,
            title: "回归、分类与聚类",
            description: "Regression, Classification & Clustering",
            icon: icons.regression,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/3_reg_class_cluster.html", label: "线性回归与逻辑回归" }
            ]
        },
        {
            id: 4,
            title: "线性 vs 非线性",
            description: "Linear vs Non-linear",
            icon: icons.linear,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/4_liner_nonliner.html", label: "线性与非线性模型" }
            ]
        },
        {
            id: 5,
            title: "距离的定义 & 最优化方法",
            description: "Distance Metrics & Optimization Methods",
            icon: icons.distance,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/5_math_basic.html", label: "数学基础" }
            ]
        },
        {
            id: 6,
            title: "最优化方法 & 残差、偏差、方差",
            description: "Optimization & Error Analysis",
            icon: icons.optimization,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/6_opti.html", label: "残差、偏差与方差" }
            ]
        },
        {
            id: 7,
            title: "模型评估 & 常用指标",
            description: "Model Evaluation & Metrics",
            icon: icons.evaluation,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/7_eval.html", label: "评估指标与方法" }
            ]
        },
        {
            id: 8,
            title: "欠拟合、过拟合与正则化",
            description: "Underfitting, Overfitting & Regularization",
            icon: icons.overfitting,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/8_regu.html", label: "模型复杂度与正则化" }
            ]
        },
        {
            id: 9,
            title: "神经网络基础",
            description: "Neural Network Fundamentals",
            icon: icons.neuralNetwork,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/9_nn_basic.html", label: "神经网络入门" }
            ]
        },
        {
            id: 10,
            title: "正向传播 & 反向传播",
            description: "Forward & Backward Propagation",
            icon: icons.backprop,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/10_bp.html", label: "反向传播基础" },
                { url: "https://flo.host/Nf5BTXc/", label: "反向传播算法详解" }
            ]
        },
        {
            id: 11,
            title: "梯度下降与局部/全局最优",
            description: "Gradient Descent & Local/Global Optima",
            icon: icons.gradient,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/11_local_glo_opti.html", label: "最优化理论" }
            ]
        },
        {
            id: 12,
            title: "卷积",
            description: "Convolution",
            icon: icons.convolution,
            links: [
                { url: "https://flo.host/tu2Ga8b/", label: "卷积基础" },
                { url: "https://flo.host/Dm_QT3B/", label: "卷积神经网络" }
            ]
        },
        {
            id: 13,
            title: "决策函数、激活函数、损失函数",
            description: "Decision, Activation & Loss Functions",
            icon: icons.functions,
            links: [
                { url: "https://carsonyanlc.github.io/mypage/13_dec_act_loss.html", label: "常用函数详解" }
            ]
        }
    ];

    // Render course list
    function renderCourseList() {
        courseListContainer.innerHTML = '';
        
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card bg-white p-5 rounded-lg shadow-sm flex flex-col';
            
            courseCard.innerHTML = `
                <div class="flex items-start space-x-3 mb-4">
                    <div class="course-number">${course.id}</div>
                    <div class="flex-1">
                        <h3 class="font-medium text-[15px]">${course.title}</h3>
                        <p class="text-gray-500 text-sm mt-1">${course.description}</p>
                    </div>
                </div>
                <div class="mt-auto flex justify-between items-center">
                    <div class="text-xs text-gray-500">
                        ${course.links.length > 1 ? 
                            '<span class="inline-block bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs">多个资源</span>' : 
                            '<span class="inline-block bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full text-xs">单个资源</span>'}
                    </div>
                    <button class="open-course-btn px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition-colors" data-course-id="${course.id}">
                        进入学习
                    </button>
                </div>
            `;
            
            courseListContainer.appendChild(courseCard);
        });
        
        // Add event listeners to buttons
        document.querySelectorAll('.open-course-btn').forEach(button => {
            button.addEventListener('click', function() {
                const courseId = parseInt(this.getAttribute('data-course-id'));
                const selectedCourse = courses.find(course => course.id === courseId);
                
                if (selectedCourse.links.length > 1) {
                    showMultiLinkOptions(selectedCourse);
                } else {
                    openCourseContent(selectedCourse.links[0].url);
                }
            });
        });
    }
    
    // Show multiple link options
    function showMultiLinkOptions(course) {
        // Hide course list with animation
        courseListContainer.classList.add('fade-out');
        
        setTimeout(() => {
            courseListContainer.classList.remove('fade-out');
            courseListContainer.classList.add('hidden');
            
            // Show multi-link selector
            multiLinkSelector.classList.remove('hidden');
            multiLinkSelector.classList.add('fade-in');
            
            // Populate multi-link selector
            multiLinkSelector.innerHTML = `
                <div class="mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div class="flex items-center space-x-4 mb-5">
                        <div class="p-2 bg-gray-100 rounded-md text-gray-700">
                            ${course.icon}
                        </div>
                        <div>
                            <h2 class="text-xl font-medium">${course.title}</h2>
                            <p class="text-gray-500 text-sm">${course.description}</p>
                        </div>
                    </div>
                    
                    <p class="text-sm font-medium mb-3">请选择学习资源：</p>
                    
                    <div class="space-y-3">
                        ${course.links.map((link, index) => `
                            <div class="resource-option p-4 border border-gray-200 rounded-lg cursor-pointer" data-url="${link.url}">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <div class="font-medium text-sm">${link.label}</div>
                                        <div class="text-gray-500 text-xs mt-1">资源 ${index + 1}</div>
                                    </div>
                                    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Reinitialize Lucide icons
            lucide.createIcons();
            
            // Add event listeners to resource options
            document.querySelectorAll('.resource-option').forEach(option => {
                option.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    openCourseContent(url);
                });
            });
            
            // Show back button
            backButton.classList.remove('hidden');
            backButton.addEventListener('click', goBackToList);
        }, 250);
    }
    
    // Open course content in iframe
    function openCourseContent(url) {
        // Hide previous content with animation
        if (!multiLinkSelector.classList.contains('hidden')) {
            multiLinkSelector.classList.add('fade-out');
        } else {
            courseListContainer.classList.add('fade-out');
        }
        
        setTimeout(() => {
            multiLinkSelector.classList.add('hidden');
            multiLinkSelector.classList.remove('fade-out');
            courseListContainer.classList.add('hidden');
            courseListContainer.classList.remove('fade-out');
            
            // Show course content
            courseContent.classList.remove('hidden');
            courseContent.classList.add('fade-in');
            
            // Reset iframe size before loading new content
            setIframeSize();
            
            // Load iframe
            courseIframe.src = url;
            
            // Show back button
            backButton.classList.remove('hidden');
            
            // Remove existing event listeners to prevent duplication
            backButton.removeEventListener('click', goBackToList);
            backButton.addEventListener('click', goBackToList);
        }, 250);
    }
    
    // Go back to course list
    function goBackToList() {
        // Hide current content with animation
        if (!courseContent.classList.contains('hidden')) {
            courseContent.classList.add('fade-out');
        } else {
            multiLinkSelector.classList.add('fade-out');
        }
        
        setTimeout(() => {
            courseContent.classList.add('hidden');
            courseContent.classList.remove('fade-out');
            multiLinkSelector.classList.add('hidden');
            multiLinkSelector.classList.remove('fade-out');
            
            // Reset iframe
            courseIframe.src = '';
            
            // Show course list
            courseListContainer.classList.remove('hidden');
            courseListContainer.classList.add('fade-in');
            
            // Hide back button
            backButton.classList.add('hidden');
        }, 250);
    }
    
    // Initialize the page
    renderCourseList();
});
