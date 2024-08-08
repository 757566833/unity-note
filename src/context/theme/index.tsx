'use client'
import React, {
  PropsWithChildren,
  Ref,
  forwardRef,
  useMemo,
} from "react";
import {
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NextLink, { LinkProps } from "next/link";

function LinkWrapper(
  props: LinkProps,
  ref: Ref<HTMLAnchorElement> | undefined,
) {
  return <NextLink ref={ref} {...props} />;
}

export const LinkWrapperRef = forwardRef(LinkWrapper);


const defaultTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#111111",
      paper: "#1F1F1F", // 你想要的背景颜色
    },
    primary: {
      main: "#ffffff",
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkWrapperRef,
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "inherit"

      }
    },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#1F1F1F', // 你想要的背景颜色
    //     },
    //   },
    // },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        size: "small",
      },
    },
    // MuiPaper: {
    //   defaultProps: {
    //     variant: "outlined",
    //   },
    // },
    MuiTabs: {
      styleOverrides: {

        indicator: {
          height: '4px', // 设置下划线的粗细
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            fontWeight: 'bold',
          },
        },

      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
        disableRipple: true,
      },
    },
    // MuiTablePagination: {
    //   defaultProps: {
    //     ActionsComponent: TablePaginationActions,
    //   },
    // },
  },
}
/**
 * 控制主题的context
 */
export function MuiThemeRegistry(
  props: PropsWithChildren,
) {

  const { children } = props;

  const theme = useMemo(() => createTheme(defaultTheme), [])


  return (
    <>
      <ThemeProvider theme={theme}>
        {children}

      </ThemeProvider>
    </>

  );

}
