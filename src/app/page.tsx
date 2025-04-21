import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 头部区域 */}
      <header className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">欢迎来到我的Cloudflare静态页面</h1>
          <p className="text-xl">使用Next.js构建，部署在Cloudflare Pages上</p>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">基于Next.js的静态站点</h2>
            <p className="text-lg mb-6">
              这个项目是使用Next.js构建的静态网站，专为Cloudflare Pages部署而优化。
              它利用了Next.js的静态导出功能，生成纯HTML、CSS和JavaScript文件。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://developers.cloudflare.com/pages/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors"
              >
                了解Cloudflare Pages
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md text-center transition-colors"
              >
                Next.js文档
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-64">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* 特性部分 */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">项目特性</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="静态导出"
              description="Next.js的静态导出功能允许生成纯静态文件，非常适合CDN部署。"
            />
            <FeatureCard
              title="快速加载"
              description="由于使用了静态文件和Cloudflare的全球CDN，网站加载速度极快。"
            />
            <FeatureCard
              title="可扩展性"
              description="从这个基础项目开始，可以轻松扩展更多功能和页面。"
            />
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Next.js on Cloudflare Pages. 版权所有。</p>
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
