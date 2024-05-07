<script lang="ts">
    import { Button, ButtonGroup, ButtonContainer } from "$lib/index.js";
</script>

<h1>按钮</h1>
<h2>主题: theme</h2>
<code> cc {"<ButtonContainer></ButtonContainer>"}</code>
<ButtonContainer>
    <Button>default</Button>
    <Button theme="red">red</Button>
    <Button theme="orange">orange</Button>
    <Button theme="green">green</Button>
    <Button theme="cyan">cyan</Button>
    <Button theme="blue">blue</Button>
    <Button theme="purple">purple</Button>
    <Button theme="black">black</Button>
</ButtonContainer>
<h2>边框: border | theme + border</h2>
<ButtonContainer>
    <Button border>default</Button>
    <Button theme="red" border>red</Button>
    <Button theme="orange" border>orange</Button>
    <Button theme="green" border>green</Button>
    <Button theme="cyan" border>cyan</Button>
    <Button theme="blue" border>blue</Button>
    <Button theme="purple" border>purple</Button>
    <Button theme="black" border>black</Button>
</ButtonContainer>
<h2>禁用: disabled</h2>
<ButtonContainer>
    <Button disabled>attr: disabled</Button>
    <Button disabled>禁用</Button>
</ButtonContainer>
<h2>尺寸: size</h2>
<ButtonContainer>
    <Button size="lg">lg</Button>
    <Button>默认</Button>
    <Button size="sm">sm</Button>
    <Button size="xs">xs</Button>
</ButtonContainer>
<ButtonContainer>
    <Button size="fluid">fluid 宽度自适应</Button>
</ButtonContainer>
<h2>圆角: redius</h2>
<ButtonContainer>
    <Button redius>默认</Button>
    <Button redius size="lg">lg</Button>
    <Button redius size="sm">sm</Button>
    <Button redius size="xs">xs</Button>
    <Button redius theme="purple" border>purple</Button>
    <Button redius theme="black">black</Button>
    <Button redius size="fluid">fluid 宽度自适应</Button>
</ButtonContainer>
<h2>组合: LayuiButtonGroup</h2>
<ButtonGroup>
    <Button>ADD</Button>
    <Button>FIND</Button>
    <Button>REMOVE</Button>
</ButtonGroup>
<ButtonGroup>
    <Button redius>ADD</Button>
    <Button redius>FIND</Button>
    <Button redius>REMOVE</Button>
</ButtonGroup>
<h2>容器: LayuiButtonContainer</h2>
<ButtonContainer>
    <Button>A</Button>
    <Button>B</Button>
</ButtonContainer>
