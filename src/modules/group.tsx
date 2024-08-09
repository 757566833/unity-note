
import { Box, Card, CardContent, CardMedia, Typography, Link, Stack, Divider, useTheme, styled, CardHeader } from "@mui/material";
import { IGroup, IItem } from "@/constant/config";
import { useSearch } from "@/context/search";
import { jsonFetcher } from "@/services";
import { useMemo } from "react";
import useSWR from "swr";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { invertColor } from "@/utils";

export const Group: React.FC<{ group: IGroup[], pageKey: string }> = (props) => {
    const { group, pageKey } = props;

    return <>
        {group.map((item) => {
            return <Items key={item.key} items={item.children} groupKey={item.key} pageKey={pageKey} title={item.title} />
        })}
    </>
}

const HighlightText: React.FC<{ text?: string, highlight: string }> = (props) => {
    const { text, highlight } = props;
    // 正则表达式全局匹配并忽略大小写
    const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
    if (!highlight) {
        return <>{text}</>
    }
    return (
        <>
            {parts?.map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <Typography component={'span'} color={'secondary'} fontSize={'bold'} key={index}>
                        {part}
                    </Typography>
                ) : (
                    part
                )
            )}
        </>
    );
};
const ItemTitleRender: React.FC<{ data: IItem }> = (props) => {
    const [search] = useSearch();
    const { data } = props;
    const theme = useTheme();
    // return <CardHeader subheader={<HighlightText text={data.title} highlight={search} />} />
    return <Stack padding={1.5} height={theme.spacing(9)} justifyContent={'center'}>
        <Typography fontWeight={'600'} overflow={'hidden'} maxHeight={'100%'}><HighlightText text={data.title} highlight={search} /></Typography>
    </Stack>
}
const ItemImageRender: React.FC<{ data: IItem }> = (props) => {
    const { data } = props;

    const imageText = data.imageText;
    const imageTextString = imageText?.content || "";
    const imageTextSize = imageText?.size || 24;

    const theme = useTheme();
    return <Box style={{ aspectRatio: 1 / 1 }} position={'relative'}>
        <CardMedia component={'img'} image={data.img} alt={""} height={'100%'} sx={{ objectFit: 'fill' }} />

        {imageTextString && <Box zIndex={10} top={0} right={0} left={0} bottom={0} position={'absolute'} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} textAlign={'center'} bgcolor={'rgba(0,0,0,0.5)'} color={theme.palette.background.default}>
            <Typography fontWeight={'bold'} fontSize={imageTextSize} sx={{ textShadow: `0 0 10px ${invertColor(theme.palette.background.default, 1)},0 0 20px ${invertColor(theme.palette.background.default, 1)}` }}  >{imageTextString || ""}</Typography>
        </Box>}
    </Box>
}


const CustomCard = styled(Card)({
    transition: "transform 0.3s",
    "&:hover": {
        transform: "scale(1.02)",
        cursor: "pointer",
    },
});

export const Items: React.FC<{ items?: IItem[], groupKey: string, pageKey: string, title: string }> = (props) => {
    const { items, groupKey, title, pageKey } = props;
    const [search] = useSearch();

    const itemsRender = useMemo(() => {
        const list: React.ReactNode[] = [];
        if (items && Array.isArray(items)) {
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                if ((search && (element.title.toLowerCase().includes(search.toLowerCase()) || element.subTitle?.toLowerCase().includes(search.toLowerCase()))) || !search) {
                    list.push(<Grid2 xs={12} sm={6} md={4} lg={3} xl={2} sx={{ textDecoration: 'none' }} href={`/${pageKey}/${groupKey}/${element.key}`} key={`/${pageKey}/${groupKey}/${element.key}`} component={Link}  {...props} >
                        <CustomCard  >


                            <ItemImageRender data={element} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <HighlightText text={element.title} highlight={search} />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <HighlightText text={element.subTitle} highlight={search} />
                                </Typography>
                            </CardContent>
                           
                        </CustomCard>
                    </Grid2>)

                }
            }
        }

        return list
    }, [groupKey, items, pageKey, props, search]);


    return <>


        <Grid2 container width={'100%'} spacing={2}>
            <Grid2 xs={12}>
                <Divider>{title}</Divider>
            </Grid2>
            {itemsRender}
        </Grid2>
    </>
}