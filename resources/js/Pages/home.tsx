import { Momo } from "@/types";

export default function Home({name,location}:Momo)
{

    return <>

        <div className="text-center mt-5">HOME</div>
        <ul className="ml-10">
            <li>
                {name}
            </li>
            <li>
              {location}
            </li>
        </ul>

    </>;
}
