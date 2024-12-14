import { PgCommon, SidebarPage, SidebarPageParam } from "../../utils/pg";

/**
 * Create a sidebar page.
 *
 * @param page sidebar page
 * @returns the page with correct types
 */
export const createSidebarPage = <N extends string>(
  page: SidebarPageParam<N>
) => {
  page.icon = "/icons/sidebar/" + page.icon;
  page.title ??= page.keybind ? `${page.name} (${page.keybind})` : page.name;
  page.importElement ??= () => {
    return import(
      `./${PgCommon.toKebabFromTitle(page.name.replace("& ", ""))}/Component`
    );
  };
  return page as SidebarPage<N>;
};
