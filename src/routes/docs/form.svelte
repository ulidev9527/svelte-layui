<script lang="ts">
    import LayuiForm from "$lib/component/form.svelte";
    import LayuiFormItem from "$lib/component/form-item.svelte";
    import LayuiFormLabel from "$lib/component/form-label.svelte";
    import LayuiInput from "$lib/component/input.svelte";

    
</script>
<h1>表单</h1>
<h2>综合预览</h2>
<LayuiForm>
    <LayuiFormItem>
        <LayuiFormLabel>用户名</LayuiFormLabel>
        <LayuiInput></LayuiInput>
    </LayuiFormItem>
</LayuiForm>