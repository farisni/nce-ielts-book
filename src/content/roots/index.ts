import PrimMdx from './prim.mdx'
import SpectMdx from './spect.mdx'
import DictMdx from './dict.mdx'
import DuctMdx from './duct.mdx'
import MitMdx from './mit.mdx'

export type RootEntry = {
  root: string
  title: string
  colorIndex: number
  total: number
  Content: React.ComponentType
}

export const roots: RootEntry[] = [
  {
    root: '-prim- / -prin- / -pri-',
    title: '第一（首要）',
    colorIndex: 0,
    total: 12,
    Content: PrimMdx,
  },
  {
    root: '-spect- / -spic-',
    title: '看（look, see）',
    colorIndex: 1,
    total: 15,
    Content: SpectMdx,
  },
  {
    root: '-dict-',
    title: '说（say, speak）',
    colorIndex: 2,
    total: 18,
    Content: DictMdx,
  },
  {
    root: '-duct- / -duc-',
    title: '引导（lead, bring）',
    colorIndex: 3,
    total: 20,
    Content: DuctMdx,
  },
  {
    root: '-mit- / -miss-',
    title: '送（send）',
    colorIndex: 4,
    total: 16,
    Content: MitMdx,
  },
]
