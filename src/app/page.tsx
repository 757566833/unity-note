'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zvBbz8b6wmJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { config, IGroup } from "@/constant/config"
import { useSearch } from "@/context/search"
import { useDebounce } from "@/hooks/debounced"
// import { config } from "@/constant/config"
import { Group } from "@/modules/group"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import useSWR from "swr"
import Image from "next/image"
import logo from '@/assets/logo/s3_logo.png'
import { jsonFetcher } from "@/services"
import { AppBar, Box, IconButton, InputAdornment, Stack, styled, Tab, Tabs, TextField, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Search } from "@mui/icons-material"
import usePrevious from "@/hooks/previous"



const url = `/api/config?tag=${Math.random()}`
const Logo = styled(Stack)(({ theme }) => {
  return {
    [theme.breakpoints.up('xl')]: {
      flex: 1,
    }
  }
})
const SearchForm = styled(Stack)(({ theme }) => {
  return {
    [theme.breakpoints.up('xl')]: {
      flex: 1,
    },
    [theme.breakpoints.down('xl')]: {
      flexGrow: 1,
    }
  }
})

const Header: React.FC = () => {
  const theme = useTheme();
  const isDownXl = useMediaQuery(theme.breakpoints.down('xl'))

  const pre = usePrevious(isDownXl)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (pre === undefined) {
      if (isDownXl) {
        setVisible(false)
      }
    }

    if ((!pre && isDownXl)) {
      setVisible(false)
    } else if (!isDownXl) {
      setVisible(true)
    }
  }, [isDownXl, pre])
  const handleVisible = useCallback(() => {
    setVisible(true)
    setTimeout(() => {
      ref.current?.focus()
    }, 0);

  }, [])
  const ref = useRef<HTMLInputElement>(null);
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    if (isDownXl) {
      setVisible(false)
    }

  }, [isDownXl])
  const [value, setValue] = useState("");
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])
  const searchValue = useDebounce(value, 500);
  const [, setGlobalSearch] = useSearch();

  useEffect(() => {
    setGlobalSearch(searchValue)
  }, [searchValue, setGlobalSearch])

  return <AppBar>
    <Toolbar><Stack direction={'row'} width={'100%'} paddingX={3}>
      <Logo direction={'row'} spacing={2} paddingX={1} alignItems={'center'}>
        <Image src={logo} width={40} height={40} alt={""} />
        {(!isDownXl || (isDownXl && !visible)) && <Typography variant="h6">
          Unity Note
        </Typography>}
      </Logo>
      <SearchForm>
        <Box textAlign={'right'}>
          {!visible && <IconButton onClick={handleVisible}>
            <Search />
          </IconButton>}
          {visible && <TextField
            fullWidth
            inputRef={ref}

            onBlur={handleBlur}
            value={value}
            onChange={handleSearchChange}


            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            placeholder="搜索"
          />}
        </Box>
      </SearchForm>
    </Stack>
    </Toolbar></AppBar>
}
export default function Component() {
  

  const [tab, setTab] = useState<string>("")
  const [initTabValue, setInitTabValue] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setTab(config?.[0].title || '')
    setTimeout(() => {
      setInitTabValue(true)
    }, 100);
  }, [])
  const handleTabChange = useCallback((_: React.SyntheticEvent, e: string) => {
    setTab(e)
  }, [])
  const tabs = useMemo(() => {
    const tabs = [];
    
    if (config) {
      for (let index = 0; index < config?.length; index++) {
        const element = config?.[index];
        tabs.push(<Tab label={element.title}  value={element.title} key={element.title} />)
       
      }
    }

    return tabs
  }, [])
  const tabsContext = useMemo(() => {

    const tabsContext = [];
    if (config) {
      for (let index = 0; index < config?.length; index++) {
        const element = config?.[index];

        tabsContext.push(<TabPanel value={element.title} key={element.title}>
          <Stack width={"100%"} margin={"0 auto"} spacing={3} padding={1}>
            <Group group={element.group} pageKey={element.key} />
          </Stack>

        </TabPanel >)
      }
    }

    return tabsContext
  }, [])



  return (
    <>
      <Header />
      <Toolbar />

      {initTabValue && <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: theme.palette.divider,bgcolor:theme.palette.background.default }} paddingX={6} position={'fixed'} zIndex={theme.zIndex.appBar} width={'100%'} >
          <TabList
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs}
          </TabList>
        </Box>
        <Tabs />
        {tabsContext}
      </TabContext>}
    </>

  )
}
