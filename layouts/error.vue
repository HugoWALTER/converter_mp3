<template>
  <div id="error">
    <Card>
      <template slot="title">
        <Logo />
        <h1>404</h1>
        <h1>{{ $t('error_page.title') }}</h1>
        <img
          class="img"
          alt="yoda"
          src="https://media1.tenor.com/images/370840ef7e20a48689639f38cc5cc01d/tenor.gif?itemid=15699485"
          contain
          style="width:100%;height:100%;"
        >
        </img>
      </template>
      <template slot="actions" class="ant-card-actions">
        <Button type="primary" @click="handleClick()">
          {{ $t('error_page.button') }}
        </Button>
      </template>
    </Card>
  </div>
</template>
<script src="./main.js"></script>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped></style>
