export type IImageText = {
    content?: string,
    size?: string | number
}
export interface IItem {
    title: string
    subTitle?: string,
    img: string
    imageText?: IImageText
    key: string
}
export interface IGroup {
    title: string
    key: string
    children?: IItem[]
}

export type IConfig = { title: string,key:string, group: IGroup[] }[]
export const config:  IConfig = [
    {
        title: '基础',
        key: 'base',
        group: [
            {
                title: 'model',
                key: 'model',
                children: [
                    {
                        title: '点与面',
                        subTitle:"模型点面基础",
                        img: 'https://minio.fzcode.com/unity/uv.png',
                        key: "base"
                    }
                ]
            },
            {
                title: 'space',
                key: 'space',
                children: [
                    {
                        title: '空间转换',
                        img: 'https://minio.fzcode.com/unity/corrdinate.png',
                        subTitle:"如何从data转为像素的",
                        key: "coordinate"
                    }
                ]
            },
            {
                title: 'render',
                key: 'render',
                children: [
                    {
                        title: 'shader的切面编程',
                        subTitle:"unity可编程渲染管线中的结构",
                        img: 'https://minio.fzcode.com/unity/aop.png',
                        key: "aop"
                    }
                ]
            },
            {
                title: 'light',
                key: 'light',
                children: [
                    {
                        title: '漫反射',
                        subTitle:"逐顶点渲染、逐像素渲染以及半兰伯特",
                        img: 'https://minio.fzcode.com/unity/diffuse.png',
                        key: "diffuse"
                    },
                    {
                        title: '高光反射',
                        subTitle:"逐顶点渲染以及逐像素渲染以及Blinn Phong",
                        img: 'https://minio.fzcode.com/unity/specular.png',
                        key: "specular"
                    }
                ]
            },
            {
                title: 'texture',
                key: 'texture',
                children: [
                    {
                        title: 'properties',
                        subTitle:"素材的一些属性",
                        img: 'https://minio.fzcode.com/unity/texture.jpg',
                        key: "properties"
                    },
                    {
                        title: 'normal texture',
                        subTitle:"法线纹理",
                        img: 'https://minio.fzcode.com/unity/normalTexture.png',
                        key: "normalTexture"
                    },
                ]
            },
        ]
    }
]