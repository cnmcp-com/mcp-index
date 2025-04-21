import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">MCP中文网</div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">博客</Link>
            <a href="https://docs.cnmcp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">文档</a>
            <Link href="/about" className="hover:text-blue-600 transition-colors">关于</Link>
          </div>
        </div>
      </nav>

      {/* 头部区域 */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">MCP中文网</h1>
          <p className="text-xl max-w-2xl mx-auto">
            MCP（Microsoft Certified Professional）中文社区，为中文开发者提供微软认证专业知识、技术分享与交流平台
          </p>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* MCP介绍部分 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">什么是MCP？</h2>
              <p className="text-lg mb-6">
                MCP（Microsoft Certified Professional）是微软认证专业人员的简称，是微软公司为IT专业人士和开发人员设计的全球认证体系。
                获得MCP认证，代表您具备了使用微软技术的专业知识和技能，能够在实际工作中高效地应用微软产品和服务。
              </p>
              <p className="text-lg mb-6">
                MCP中文网致力于为中文开发者提供最新的微软技术资讯、认证考试指南、技术教程和实践经验，帮助更多中文开发者成长为微软技术领域的专业人才。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.cnmcp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
                >
                  浏览中文文档
                </a>
                <a
                  href="/blog"
                  className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md text-center transition-colors"
                >
                  阅读技术博客
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-64 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-blue-600">MCP中文网</h3>
                <p className="text-gray-600 mt-2">微软认证专业人员中文社区</p>
              </div>
            </div>
          </div>
        </section>

        {/* 博客文章部分 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">最新博客文章</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="Azure云服务入门指南"
              description="了解如何快速上手Microsoft Azure云服务，包括虚拟机、存储服务和网络配置等基础知识。"
              date="2023-11-15"
            />
            <BlogCard
              title="Microsoft 365开发者认证路径"
              description="详细解析Microsoft 365开发者认证体系，从考试内容到备考策略，助您一臆而就。"
              date="2023-10-28"
            />
            <BlogCard
              title="使用C#开发云原生应用"
              description="探索如何利用C#和.NET技术栈开发现代云原生应用，包括微服务架构和容器化部署实践。"
              date="2023-10-12"
            />
          </div>
          <div className="text-center mt-10">
            <a href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
              查看更多文章
            </a>
          </div>
        </section>

        {/* 特性部分 */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">MCP中文社区特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="中文文档资源"
              description="提供丰富的中文技术文档和教程，帮助开发者更好地理解和应用微软技术。"
            />
            <FeatureCard
              title="认证考试指南"
              description="分享MCP各项认证的考试指南、备考经验和实战技巧，提高通过率。"
            />
            <FeatureCard
              title="技术交流社区"
              description="连接志同道合的开发者，分享经验，解决问题，共同成长。"
            />
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MCP中文网 (www.cnmcp.com). 版权所有。</p>
        </div>
      </footer>
    </div>
  );
}

// 特性卡片组件
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 博客卡片组件
function BlogCard({ title, description, date }: { title: string; description: string; date: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 hover:underline">阅读更多 →</a>
    </div>
  );
}
