<script lang="ts">
    import Icon from "./icon.svelte";

    export let name = "";
    export let type: "text" | "password" | "textarea" | "number" = "text";
    export let placeholder: string | undefined = undefined;
    export let disabled = false;
    export let readonly = false;
    export let value = "";

    export let eyeOpen = false;
</script>

<div class="layui-input-wrap">
    {#if type === "textarea"}
        <textarea
            class="layui-textarea"
            {name}
            {disabled}
            {readonly}
            {placeholder}
            bind:value
            on:input
        ></textarea>
    {:else}
        <input
            type={eyeOpen ? "text" : type}
            class="layui-input"
            {name}
            {disabled}
            {readonly}
            {placeholder}
            bind:value
            on:input
        />
    {/if}
    {#if type === "password"}
        <div class="layui-input-affix layui-input-suffix">
            <Icon
                class = {disabled ? "layui-disabled" : ""}
                type={eyeOpen ? "eye-invisible" : "eye"}
                on:click={() => !disabled && (eyeOpen = !eyeOpen)}
            ></Icon>
        </div>
    {/if}
</div>
