import type { NextConfig } from "next";

function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository || process.env.GITHUB_ACTIONS !== "true") {
    return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  }

  const [owner = "", repo = ""] = repository.split("/");
  const isUserPage = repo === `${owner}.github.io`;

  return isUserPage ? "" : `/${repo}`;
}

const basePath = getBasePath();

// 这里直接按静态导出配置，方便后续一键部署到 GitHub Pages。
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
