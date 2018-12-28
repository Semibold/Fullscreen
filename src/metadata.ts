interface ProjectMetadata {
    readonly name: string;
    readonly version: string;
    readonly revision: string;
    readonly production: boolean;
    readonly lastCompiled: string;
}

// @ts-ignore (from webpack.DefinePlugin)
export const metadata: ProjectMetadata = Object.freeze(__X_METADATA__);
