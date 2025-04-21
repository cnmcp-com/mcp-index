import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 bg-white shadow-md py-4 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            MCP中文网
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">首页</Link>
            <a 
              href="https://docs.cnmcp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              中文文档
            </a>
          </div>
        </div>
      </nav>

      {/* 头部区域 - 带视差效果 */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform -skew-y-3 origin-top-right -translate-y-12"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl shadow-xl inline-block">
            <h1 className="text-6xl font-bold mb-6 text-white">MCP<span className="text-yellow-300">中文网</span></h1>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              为中文开发者提供优质的技术资源与学习平台
            </p>
            <a 
              href="https://docs.cnmcp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              浏览中文文档
            </a>
          </div>
        </div>
      </header>

      {/* 简介部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full mb-3">了解 MCP</span>
            <h2 className="text-4xl font-bold mb-6">Microsoft Certified Professional</h2>
            <p className="text-lg text-gray-600">
              MCP是微软公司面向IT专业人员和开发者推出的专业认证体系，涵盖微软各项技术与产品，是IT人员职业能力的重要证明。
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容区域 - 瀑布流布局优化 */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <InfoCard 
            title="技术发展历程" 
            content="MCP认证项目自1992年推出以来，已经发展成为IT行业内被广泛认可的认证体系，随着微软技术的发展不断更新认证内容。"
            bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
            icon="📈"
          />
          
          <InfoCard 
            title="认证类型" 
            content="MCP认证体系包括基础认证、角色专业认证和专项技术认证等多个级别，覆盖开发者、管理员、架构师、数据科学家等多个角色。"
            bgColor="bg-gradient-to-br from-purple-50 to-pink-50"
            icon="🏆"
          />
          
          <InfoCard 
            title="Azure云技术" 
            content="作为微软核心业务之一，Azure云计算平台相关的认证是当前MCP体系中的重点内容，包括云架构、DevOps、安全等多个方向。"
            bgColor="bg-gradient-to-br from-blue-50 to-cyan-50"
            icon="☁️"
          />
          
          <InfoCard 
            title="AI与数据科学" 
            content="随着人工智能的发展，MCP认证增加了AI工程师、数据科学家等新兴认证项目，涵盖机器学习、认知服务等前沿技术。"
            bgColor="bg-gradient-to-br from-green-50 to-teal-50"
            icon="🤖"
          />
          
          <InfoCard 
            title="开发技术栈" 
            content="MCP认证包含.NET开发、Web应用开发、移动应用开发等多个开发方向，帮助开发者验证在不同平台上的专业技能。"
            bgColor="bg-gradient-to-br from-yellow-50 to-amber-50"
            icon="💻"
          />
          
          <InfoCard 
            title="Office与企业应用" 
            content="Microsoft 365应用开发与管理是企业中广泛应用的技能，相关认证专注于企业协作、生产力和通信解决方案。"
            bgColor="bg-gradient-to-br from-orange-50 to-red-50"
            icon="📊"
          />
        </div>

        {/* MCP认证体系部分 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full mb-3">认证体系</span>
            <h2 className="text-3xl font-bold">MCP认证路径</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h3 className="text-lg font-bold text-white">基础认证</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <CertItem title="Microsoft Certified: Azure Fundamentals" code="AZ-900" />
                  <CertItem title="Microsoft Certified: Security Fundamentals" code="SC-900" />
                  <CertItem title="Microsoft Certified: Data Fundamentals" code="DP-900" />
                  <CertItem title="Microsoft Certified: AI Fundamentals" code="AI-900" />
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                <h3 className="text-lg font-bold text-white">角色专业认证</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <CertItem title="Microsoft Certified: Azure Administrator" code="AZ-104" />
                  <CertItem title="Microsoft Certified: Azure Developer" code="AZ-204" />
                  <CertItem title="Microsoft Certified: DevOps Engineer" code="AZ-400" />
                  <CertItem title="Microsoft Certified: Solutions Architect" code="AZ-305" />
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 实用资源部分 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full mb-3">学习资源</span>
            <h2 className="text-3xl font-bold">MCP学习路径</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard 
              title="Microsoft Learn" 
              description="微软官方学习平台，提供免费的交互式学习路径和模块，涵盖所有MCP认证内容"
              link="https://learn.microsoft.com/zh-cn/"
            />
            <ResourceCard 
              title="Azure文档中心" 
              description="全面的Azure云服务文档，包括最佳实践、示例和教程，是Azure认证的重要参考"
              link="https://docs.microsoft.com/zh-cn/azure/"
            />
            <ResourceCard 
              title="MCP中文文档" 
              description="我们整理的中文技术文档，以通俗易懂的方式解释微软技术概念和应用实践"
              link="https://docs.cnmcp.com"
              isPrimary={true}
            />
          </div>
        </div>

        {/* 文档链接突出显示 */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full mb-3">一站式文档</span>
            <h2 className="text-3xl font-bold mb-6">探索完整的MCP中文文档</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              我们精心翻译和整理了微软技术文档，提供从入门到精通的全面学习资料，帮助您更高效地掌握MCP相关技术。
            </p>
            <a 
              href="https://docs.cnmcp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg font-bold py-5 px-10 rounded-full shadow-md text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              立即前往中文文档
            </a>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block mb-4">
              MCP中文网
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              为中文开发者提供高质量的微软技术学习资源与交流平台
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MCP中文网 (www.cnmcp.com). 版权所有。</p>
            <div className="mt-4 text-sm text-gray-500">
              MCP中文网不隶属于Microsoft Corporation。Microsoft和相关产品名称为Microsoft公司的商标。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 信息卡片组件（优化版）
function InfoCard({ title, content, bgColor, icon }: { title: string; content: string; bgColor: string; icon: string }) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

// 认证项目组件
function CertItem({ title, code }: { title: string; code: string }) {
  return (
    <li className="flex items-start">
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mr-3 mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      <div>
        <span className="font-medium block">{title}</span>
        <span className="text-sm text-gray-500">{code}</span>
      </div>
    </li>
  );
}

// 资源卡片组件
function ResourceCard({ title, description, link, isPrimary = false }: { title: string; description: string; link: string; isPrimary?: boolean }) {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${isPrimary ? 'border-2 border-blue-400' : ''}`}>
      <div className={`p-6 ${isPrimary ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'}`}>
        <h3 className={`text-xl font-bold mb-2 ${isPrimary ? 'text-blue-700' : 'text-gray-800'}`}>{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center font-medium ${isPrimary ? 'text-blue-600' : 'text-indigo-600'} hover:underline`}
        >
          访问资源
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
}
