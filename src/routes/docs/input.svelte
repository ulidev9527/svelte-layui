<script lang="ts">
    import { Input } from "$lib/component/index.js";

    import ContextLine from "./ContextLine.svelte";
</script>

<h1>Input</h1>

<ContextLine title="普通文本:" code="<Input />">
    <Input />
</ContextLine>
<ContextLine title="文本域:" code='<Input type="textarea" />'>
    <Input type="textarea" />
</ContextLine>
<ContextLine title="密码框:" code='<Input type="password" />'>
    <Input type="password" />
</ContextLine>

<ContextLine title="只读:" code='<Input readonly value="只读" />'>
    <Input readonly value="只读" />
</ContextLine>
<ContextLine title="禁用" code='<Input readonly disabled/>'>
    <Input readonly disabled/>
</ContextLine>
<ContextLine title="密码框禁用" code='<Input type="password" readonly disabled/>'>
    <Input type="password" readonly disabled/>
</ContextLine>