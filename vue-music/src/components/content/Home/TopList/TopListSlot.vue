<template>
    <div class="toplistslot">
      <slot name="left" class="leftlist"></slot>
      <slot name="meddle" class="meddlelist"></slot>
      <slot name="right" class="rightlist"></slot>
    </div>
</template>

<script>
export default {
  name:"toplistslot"
}
</script>

<style>
.toplistslot{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 20px 0;
  border: 1px solid rgb(180, 180, 180);
  box-shadow: 0px 0px 30px 3px rgba(0, 0,0,.4);
}

</style>