import {visit} from 'unist-util-visit'
import {writeFileSync} from 'fs';

export default function rehypeSomething() {
  return (tree, file) => {
    writeFileSync('./out.json', JSON.stringify(tree))
    /*visit(tree, 'ParagraphNode', (node) => {
      console.log(node)
    })*/
  }
}

