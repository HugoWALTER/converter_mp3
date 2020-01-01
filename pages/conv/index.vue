<template>
  <div id="conv">
    <Form :form="form" @submit="handleSubmit">
      <Card>
        <template slot="title">
          <Logo />
          <h4>{{ $t('conv.title') }}</h4>
          <span>{{ $t('conv.description') }}</span>
        </template>
        <FormItem :label="$t('conv.conv')">
          <AInput v-decorator="rules.conv" placeholder="https://www.youtube.com/watch?v=q0hyYWKXF0Q">
            <Icon slot="prefix" type="edit" style="color: rgba(0,0,0,.25)" />
          </AInput>
        </FormItem>
        <template slot="actions" class="ant-card-actions">
          <Button html-type="submit">
            {{ $t('conv.submit') }}
          </Button>
        </template>
      </Card>
    </Form>
  </div>
</template>
<script src="./main.js"></script>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped></style>
