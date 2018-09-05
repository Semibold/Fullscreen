interface ProjectMetadata {
    name: string;
    version: string;
    envMode: "none" | "development" | "production";
    gitHash: string;
    lastCompiled: string;
}

// @ts-ignore (from webpack.DefinePlugin)
export const metadata: ProjectMetadata = __X_METADATA__;
