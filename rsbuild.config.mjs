import { defineConfig } from "@rsbuild/core";
import { CopyRspackPlugin, LightningCssMinimizerRspackPlugin } from "@rspack/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  tools: {
    rspack: {
      optimization: {
        minimizer: [
          "...",
          new LightningCssMinimizerRspackPlugin({
            include: "static/css",
            //exclude: 'static/external-css',
          }),
        ],
      },
      plugins: [
        new CopyRspackPlugin({
          patterns: [
            {
              from: "./public/css",
              to: "static/external-css",
            },
          ],
        }),
      ],
    },
  },
  plugins: [pluginReact()],
});
