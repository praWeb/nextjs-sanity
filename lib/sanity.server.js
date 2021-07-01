// lib/sanity.server.js
import {createClient} from 'next-sanity'
import {config} from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'sk7hkdL3eIH1tteoKJk0xkmVbzR7vbcS5kC7O0SGEQc3C8kkmUvnD9RT1Kim1Jo6uIOIlcHWptOLmZS3DSgJWAZHLLsAxtUHZbLWXbdnyfU1KVEb3SJ5XfE4W8rP8A8ScODRoKUzjJYwF81NGf3Dy9CTVOW1iomvfZUKgYqt1gm6ZmHRTnF7',
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)