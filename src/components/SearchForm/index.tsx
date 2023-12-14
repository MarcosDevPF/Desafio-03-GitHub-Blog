import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer, SearchFormContent } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface SearchFormProps {
    postsQuantity: number
    getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ postsQuantity, getPosts }: SearchFormProps) {

    const {
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchPosts(data: SearchFormInputs) {
        await getPosts(data.query);
    }

    return (
        <SearchFormContainer >
            <div>
                <h3>Publicações</h3>
                <span>{postsQuantity} publicações</span>
            </div>

            <SearchFormContent onSubmit={handleSubmit(handleSearchPosts)} >
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register("query")}
                />
            </SearchFormContent>
        </SearchFormContainer>
    )
}