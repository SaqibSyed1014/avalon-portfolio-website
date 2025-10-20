declare type IChildren = { children: React.ReactNode };
declare type ISectionHead = { subText: string; heading: string; description?: string };
declare type IClassName = { className?: string };
declare type IClassNameWithChildren = IChildren & IClassName;
