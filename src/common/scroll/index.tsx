
'use client'
import { useTheme } from "@mui/material";
import { useMemo } from "react";

export function MuiScroll() {
  const theme = useTheme();
  const mode = useMemo(() => theme.palette.mode, [theme.palette.mode])
  const style = useMemo(() => {
    if (mode === "light") {
      return (
        <style>
          {`
                      
                      /* 定义滚动条轨道的颜色 */
                      ::-webkit-scrollbar-track {
                        background: #F5F5F5;
                        border-radius: 10px;
                      }
                      
                      /* 定义滚动条手柄的颜色 */
                      ::-webkit-scrollbar-thumb {
                        background: #DCDCDC;
                        border-radius: 10px;
                      }
                      
                      /* 定义滚动条悬停时手柄的颜色 */
                      ::-webkit-scrollbar-thumb:hover {
                        background-color: #C2C2C2;
                      }
                      
                      ::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                      }
                      ::-webkit-scrollbar-corner {
                        background-color:#F5F5F5
                      }

                `}
        </style>
      );
    }
    return (
      <style>
        {`
                         /* 定义滚动条轨道的颜色 */
                         ::-webkit-scrollbar-track {
                           background: #3B3B3B;
                           border-radius: 10px;
                         }
                         
                         /* 定义滚动条手柄的颜色 */
                         ::-webkit-scrollbar-thumb {
                           background: #A9A9A9;
                           border-radius: 10px;
                         }
                         
                         /* 定义滚动条悬停时手柄的颜色 */
                         ::-webkit-scrollbar-thumb:hover {
                           background-color: #A9A9A9;
                         }
                         
                         ::-webkit-scrollbar {
                           width: 8px;
                           height: 8px;
                         }
                         ::-webkit-scrollbar-corner {
                            background-color:#A9A9A9
                          }

                `}
      </style>
    );
  }, [mode]);
  return <>{style}</>;
}
