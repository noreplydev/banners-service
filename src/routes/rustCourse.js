import path from 'path'
import { Router } from 'express'
import nodeHtmlToImage from 'node-html-to-image'
import rustCourseGenerator from '../generators/rustCourseGenerator.js'

const router = Router()

router.get('/:episode/:topic', async (req, res) => {
  const { episode, topic } = req.params
  const assets = `${process.env.GITHUB_RAW_ASSETS}/rust-course`

  await nodeHtmlToImage({
    output: path.join(__dirname, '..', 'out', 'banner.png'),
    html: rustCourseGenerator(episode, topic, assets)
  }).then(() => {
    res.sendFile(path.join(__dirname, '..', 'out', 'banner.png'))
  })
})

export default router
