<script>
export default {
  name: 'Product-components',
}
</script>

<template>
  <div class="product">
    <div
      class="product__hero"
      v-for="(item, id) in $store.state.productsList"
      :key="id"
    >
      <div class="product__image">
        <img :src="item.img" alt="" />
      </div>

      <div class="product__title">
        <h4>{{ item.authors }}</h4>
        <p>
          {{ item.publishedDate }}
        </p>
        <span>{{ item.language }}</span>
      </div>

      <div class="product__disc">
        <h1>{{ item.name }}</h1>
        <p>{{ item.pageCount }}</p>

        <span>
          {{ item.description }}
        </span>
      </div>
    </div>

    <div v-if="$store.state.has_content === 'no_content'">
      Информация не найдена
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(../../../static/main.scss);
.product {
  background: #596fbc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  border-radius: 12px;
}
.product__hero {
  background: #fff;
  width: 300px;
  margin-bottom: 30px;
  margin: 0 auto;
  margin-top: 24px;
  border-radius: 12px;
  padding: 5px;
}

.product__image {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: rgb(72, 70, 70);
  border-radius: 12px 12px 0 0;

  img {
    background: rgb(3, 3, 15);
    color: #fff;
    margin: 0 auto;
  }
}

.product__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
  font-size: 18px;
  font-weight: 500;

  p {
    font-size: 14px;
    width: 100px;
  }

  span {
    font-size: 14px;
  }
}
</style>
