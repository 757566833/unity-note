import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

import { Metadata } from 'next';

import "./globals.css";
import 'katex/dist/katex.min.css'
import 'github-markdown-css/github-markdown-dark.css'
import { SearchProvider } from '@/context/search';
import { MuiThemeRegistry } from '@/context/theme';
import { WindowProvider } from '@/context/window';
import { MarkdownCss } from '@/common/markdown'
import { MuiScroll } from '@/common/scroll';

export const metadata: Metadata = {
  title: "Unity Note",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>

          <WindowProvider>


            <SearchProvider>
              <React.Suspense>
                <MuiThemeRegistry>
   
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <MarkdownCss />
                    <MuiScroll />
                    <CssBaseline />
                    {props.children}
             
                </MuiThemeRegistry>
              </React.Suspense>

            </SearchProvider>
          </WindowProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
