import {API} from "aws-amplify"
import { useRouter } from "next/router"
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react"
import '../../configureAmplify'
import { listTodos, getTodo } from "../../src/graphql/queries"

export default function Post({post}) {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading</div>
    }

    return(
        <div>
            <h1 className="text-5xl mt-4 font-semibold tracing-wide"></h1>
            {post.title}
        </div>
    )
}

export async function getStaticPaths() {
    const postData = await API.graphql({
        query:listTodos
    })
    const paths = postData.data.listTodos.items
    .map(post => ({params: {id: post.id}}))
    return {
        paths,
        isFallback: true
    }
}

export async function getStaticProps({params}){
    const {id} = params 
    const postData = await API.graph({
        query: getTodo,
        variables: {id}
    })
    return {
        props: {
            post: postData.data.getTodo
        }
    }
}