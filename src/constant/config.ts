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
                title: '模型',
                key: 'modal',
                children: [
                    {
                        title: '点与面',
                        subTitle:"模型点面基础",
                        img: 'https://minio.fzcode.com/unity/base/space/3D_Cartesian.svg',
                        key: "base"
                    }
                ]
            },
            {
                title: 'space',
                key: 'space',
                children: [
                    {
                        title: '空间',
                        img: 'https://minio.fzcode.com/unity/base/space/3D_Cartesian.svg',
                        key: "coordinate"
                    }
                ]
            },
            {
                title: 'aop',
                key: 'aop',
                children: [
                    {
                        title: 'unit的切面编程',
                        img: 'https://gw.alipayobjects.com/zos/antfincdn/6JqQWvSjJc/8a0b9e2f-7d8d-4e0b-8e2b-5b5c9c4a8e1b.png',
                        key: ""
                    }
                ]
            },
        ]
    },
    {
        title: '光照',
        key: 'light',
        group: [
            {
                title: '基础光照',
                key: 'base',
                children: [
                    {
                        title: '环境光',
                        img: 'https://gw.alipayobjects.com/zos/antfincdn/6JqQWvSjJc/8a0b9e2f-7d8d-4e0b-8e2b-5b5c9c4a8e1b.png',
                        key: ""
                    }
                ]
            },
            
        ]
    }
]