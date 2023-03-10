import { NavLink } from "react-router-dom"

export const Navigation = ({ category, isLogin }) => {
    const cateFilter = (v) => {
        return !v.hasOwnProperty("isLogin") || v.isLogin === isLogin
    }
    const cateMap = (v) => {
        return (
            <li key={v.path}>
                <NavLink to={v.path}>{v.name}</NavLink>
                {v.subCate && subCate(v.subCate)}
            </li>
        )
    }
    const subCate = (v) => {
        return <Navigation category={v} isLogin={isLogin} />
    }
    return <ul>{category.filter(cateFilter).map(cateMap)}</ul>
}
