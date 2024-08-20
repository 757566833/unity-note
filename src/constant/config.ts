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
                title: 'common',
                key: 'common',
                children: [
                    {
                        title: '点与面',
                        subTitle:"模型点面基础",
                        img: 'https://minio.fzcode.com/unity/uv.png',
                        key: "base"
                    },
                    {
                        title: '空间转换',
                        img: 'https://minio.fzcode.com/unity/corrdinate.png',
                        subTitle:"如何从data转为像素的",
                        key: "coordinate"
                    },
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
                    {
                        title: 'gradient',
                        subTitle:"渐变纹理",
                        img: 'https://minio.fzcode.com/unity/gradient.png',
                        key: "gradient"
                    },
                ]
            },
            {
                title: 'transparent',
                key: 'transparent',
                children: [
                    {
                        title: 'render order',
                        subTitle:"渲染顺序",
                        img: 'https://minio.fzcode.com/unity/render_order.png',
                        key: "renderOrder"
                    },
                    {
                        title: 'alpha test',
                        subTitle:"透明度测试是一种只有透明和非透明的渲染方式",
                        img: 'https://minio.fzcode.com/unity/alpha_test.png',
                        key: "alphaTest"
                    },
                    {
                        title: 'alpha blend',
                        subTitle:"透明度混合",
                        img: 'https://minio.fzcode.com/unity/alpha_blend.png',
                        key: "alphaBlend"
                    },
                    {
                        title: 'alpha blend both side',
                        subTitle:"可见内部的透明度混合",
                        img: 'https://minio.fzcode.com/unity/alpha_blend_both_side.png',
                        key: "alphaBlendBothSide"
                    },
                ]
            },
        ]
    },{
        title:'函数',
        key:'function',
        group:[{
            title: 'func',
            key: 'func',
            children: [
                {
                    title: 'common',
                    subTitle:"基本运算",
                    img: 'https://minio.fzcode.com/unity/function.jpg',
                    key: "common"
                },
                {
                    title: 'function part 1',
                    img: 'https://minio.fzcode.com/unity/function.jpg',
                    subTitle:"函数第一部分",
                    key: "function1"
                },
                {
                    title: 'shader的切面编程',
                    subTitle:"unity可编程渲染管线中的结构",
                    img: 'https://minio.fzcode.com/unity/aop.png',
                    key: "aop"
                }
            ]
        },]
    }
]