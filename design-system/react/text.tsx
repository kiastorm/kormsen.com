import { text, TextVariants } from '@design-system/styles/text'
import { styled } from 'stitches.config'

const DEFAULT_TAG = 'span'
const Text = styled(DEFAULT_TAG, text)

export type { TextVariants }
export { text, Text, DEFAULT_TAG }
