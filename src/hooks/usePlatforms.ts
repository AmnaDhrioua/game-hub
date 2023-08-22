import useData from "../hooks2/useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');








export default usePlatforms;