import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer, SearchFormContent } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useContext } from "react";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {

    const {
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSearchPosts(data: SearchFormInputs) {
        console.log(data);
    }

    return (
        <SearchFormContainer >
            <div>
                <h3>Publicações</h3>
                <span>0 publicações</span>
            </div>

            <SearchFormContent onSubmit={handleSubmit(handleSearchPosts)} >
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </SearchFormContent>
        </SearchFormContainer>
    )
}