// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'

import {HelloWorldAction} from '../HellowWorldAction'

export default function resolveDocumentActions(props) {
//   return [...defaultResolve(props), HelloWorldAction]
return [...defaultResolve(props)]
}