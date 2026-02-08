'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
  }
}

interface InstagramEmbedProps {
  postUrls: string[]
}

export function InstagramEmbed({ postUrls }: InstagramEmbedProps) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  const handleScriptLoad = () => {
    setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }, 300)
  }

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {postUrls.map((url, index) => (
          <div key={index} className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                maxWidth: '540px',
                width: '100%',
                margin: 0,
                background: '#faf8f5',
                border: 0,
                borderRadius: '3px',
                boxShadow:
                  '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
