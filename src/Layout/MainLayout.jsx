import AppRouter from "../components/AppRouter"
import Footers from "../components/Footers"
import Headerss from "../components/Headerss"

export const MainLayout = () => {
	return(
		<>
		<Headerss />
<AppRouter />
		<Footers />
		</>
	)
}