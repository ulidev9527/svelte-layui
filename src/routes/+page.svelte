<script lang="ts">
    import LayuiMenu from "$lib/component/menu.svelte";
    import LayuiMenuItem from "$lib/component/menu-item.svelte";
    import LayuiIcon from "$lib/component/icon.svelte";
    import LayuiContainer from "$lib/component/layout-container.svelte";
    import DocLayout from "./docs/layout.svelte";
    import DocGrid from "./docs/grid.svelte";
    import DocButton from "./docs/button.svelte";
    import DocIcon from "./docs/icon.svelte";
    import DocForm from "./docs/form.svelte";
    import DocInput from "./docs/input.svelte";
    import LayuiGridRow from "$lib/component/grid-row.svelte";
    import LayuiGridCol from "$lib/component/grid-col.svelte";

    let menus: [string, any, 0 | 1 | 2][] = $state([
        // [名称, 组件, 0隐藏 1默认显示 2独立显示]
        ["input/textarea", DocInput, 1],
        ["form", DocForm, 1],
        ["button", DocButton, 1],
        ["layout", DocLayout, 1],
        ["grid", DocGrid, 1],
        ["icon", DocIcon, 1],
    ]);

    function showOnly(nowM: [string, any, 0 | 1 | 2]) {
        let showAll = nowM[2] == 2;
        for (let i = 0; i < menus.length; i++) {
            let m = menus[i];
            m[2] = showAll ? 1 : m[0] === nowM[0] ? 2 : 0;
        }
    }
</script>

<LayuiContainer>
    <LayuiGridRow>
        <LayuiGridCol size="xs3">
            <LayuiMenu type="menu">
                {#each menus as m}
                    <LayuiMenuItem on:click={() => showOnly(m)}>
                        <LayuiIcon type={m[2] > 0 ? "eye" : "eye-invisible"} />
                        <span>{m[0]}</span>
                    </LayuiMenuItem>
                {/each}
            </LayuiMenu>
        </LayuiGridCol>
        <LayuiGridCol size="xs9">
            {#each menus as m}
                {#if m[2] > 0}
                    <svelte:component this={m[1]} />
                {/if}
            {/each}
        </LayuiGridCol>
    </LayuiGridRow>
</LayuiContainer>
