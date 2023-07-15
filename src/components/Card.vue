<template>
  <div class="  p-5 shadow rounded flex flex-col gap-2 w-full">
    <div>
      <slot name="image"></slot>
    </div>
    <div><slot></slot></div>
    <div>
    <slot name="title"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>