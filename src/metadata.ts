interface ProjectMetadata {
    mode: 'none' | 'development' | 'production';
    name: string;
    gitHash: string;
    version: string;
    lastModified: string;
}

// @ts-ignore (from webpack.DefinePlugin)
export const metadata: ProjectMetadata = __X_METADATA__;
