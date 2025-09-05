import * as fs from "fs";
import * as path from "path";

const pageName = process.argv[2];

if (!pageName) {
  console.error("Please provide a page name: npm run gen-page Home");
  process.exit(1);
}

const appDir = path.join(process.cwd(), "app");
const filePath = path.join(appDir, `${pageName}/page.tsx`);

const template = `import React from "react";

export default function ${pageName}() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">${pageName} Page</h1>
      <p>Welcome to your new page!</p>
    </div>
  );
}
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, template, "utf8");

console.log(`✅ Page created at ${filePath}`);
