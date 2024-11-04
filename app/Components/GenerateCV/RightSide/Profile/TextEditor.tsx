import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Transforms, Element as SlateElement } from 'slate'
import { Slate, Editable, withReact, useSlate } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'
import { Button } from './Button'

type CustomElement = { type: 'paragraph' | 'code'; children: CustomText[] }
type CustomText = { text: string; bold?: boolean; italic?: boolean }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const CodeElement = (props: any) => (
    <pre {...props.attributes} className="p-2 rounded">
        <code>{props.children}</code>
    </pre>
)

const DefaultElement = (props: any) => (
    <p {...props.attributes} className="my-2">{props.children}</p>
)

const Leaf = (props: any) => {
    let { attributes, children, leaf } = props

    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    return <span {...attributes}>{children}</span>
}

// Toolbar component with Tailwind styling
const Toolbar = () => {
    const editor = useSlate()

    return (
        <div className="flex flex-row gap-3  border-black border-b-2 ">
            <div className='ml-5'>
                <Button
                    active={Editor.marks(editor)?.bold === true}
                    onMouseDown={(event: { preventDefault: () => void }) => {
                        event.preventDefault()
                        toggleMark(editor, 'bold')
                    }}
                >
                    <strong>B</strong>
                </Button>
                <Button
                    active={Editor.marks(editor)?.italic === true}
                    onMouseDown={(event: { preventDefault: () => void }) => {
                        event.preventDefault()
                        toggleMark(editor, 'italic')
                    }}
                >
                    <em>I</em>
                </Button>
            </div>
        </div>
    )
}

const toggleMark = (editor: Editor, format: 'bold' | 'italic') => {
    const isActive = Editor.marks(editor)?.[format] === true
    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

export default function BasicEditor() {
    const [editor] = useState(() => withReact(createEditor()))

    const renderElement = useCallback((props: { element: { type: string } }) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback((props: any) => {
        return <Leaf {...props} />
    }, [])

    return (
        <Slate editor={editor} initialValue={initialValue}>
            <div className="max-w-2xl mx-auto mt-6 border rounded-lg shadow-lg overflow-hidden">
                <Toolbar />
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    className="p-4 min-h-[300px]  text-gray-900 focus:outline-none"
                    onKeyDown={event => {
                        if (event.key === '`' && event.ctrlKey) {
                            event.preventDefault()
                            const [match] = Editor.nodes(editor, {
                                match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'code',
                            })
                            Transforms.setNodes(
                                editor,
                                { type: match ? 'paragraph' : 'code' },
                                { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
                            )
                        }

                        // Toggle bold with Ctrl+B
                        if (event.key === 'b' && event.ctrlKey) {
                            event.preventDefault()
                            toggleMark(editor, 'bold')
                        }

                        // Toggle italic with Ctrl+I
                        if (event.key === 'i' && event.ctrlKey) {
                            event.preventDefault()
                            toggleMark(editor, 'italic')
                        }
                    }}
                />
            </div>
        </Slate>
    )
}
