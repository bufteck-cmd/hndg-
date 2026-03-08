<template>
  <div class="container mv-services-page">
    <h1 class="text-center mt-3">Услуги и цены</h1>

    <div class="text-center text-bg-danger mt-3 mb-1 sticky-top mv-warning">
      Цены указаны без медикаментов и перевязочных материалов!
    </div>

    <div class="mv-service-actions sticky-top">
      <div class="dropdown">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Быстрый переход
        </button>
        <ul class="dropdown-menu">
          <li
            v-for="(qLink, index) in getQLinksGroup()"
            :key="'quick-link-' + index"
          >
            <a class="dropdown-item" :href="qLink.link">{{ qLink.value }}</a>
          </li>
        </ul>
      </div>

      <div class="mv-search-wrap">
        <label for="service-search" class="form-label mb-1">Поиск по услугам</label>
        <input
          id="service-search"
          v-model="searchQuery"
          type="search"
          class="form-control"
          placeholder="Например: вакцинация, УЗИ, операция"
        />
      </div>
    </div>

    <div class="mt-3 table-responsive mv-table-wrap">
      <table class="table table-striped table-hover align-middle mb-0">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Цена (в сумах)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prow, index) in displayedPrices" :key="'price-row-' + index">
            <template v-if="prow.type === 'header'">
              <th
                scope="row"
                colspan="2"
                class="text-center"
                :id="'group-of-prices-' + prow.sourceIndex"
              >
                {{ prow.numbering }} {{ prow.value }}
              </th>
            </template>

            <template v-else-if="prow.type === 'row'">
              <td>{{ prow.numbering }} {{ prow.value }}</td>
              <td>{{ formatPriceNumber(prow.price!) }}</td>
            </template>

            <template v-else-if="prow.type === 'group'">
              <td colspan="2" class="text-center">
                {{ prow.numbering }} {{ prow.value }}
              </td>
            </template>

            <template v-else-if="prow.type === 'group-price'">
              <td class="text-end">
                {{ prow.numbering }} {{ prow.value }}
              </td>
              <td>{{ formatPriceNumber(prow.price!) }}</td>
            </template>

            <template v-else-if="prow.type === 'group-price-from'">
              <td class="text-end">
                {{ prow.numbering }} {{ prow.value }}
              </td>
              <td>от {{ formatPriceNumber(prow.price!) }}</td>
            </template>

            <template v-else-if="prow.type === 'row-price-from'">
              <td>{{ prow.numbering }} {{ prow.value }}</td>
              <td>от {{ formatPriceNumber(prow.price!) }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import prices from "@/stores/prices.json";
import { computed, ref } from "vue";

type PriceRowType =
  | "header"
  | "row"
  | "group"
  | "group-price"
  | "group-price-from"
  | "row-price-from";

interface PriceRow {
  type: PriceRowType;
  value: string;
  price?: number;
}

interface NumberedPriceRow extends PriceRow {
  numbering: string;
  sourceIndex: number;
}

interface QuickLink {
  value: string;
  link: string;
}

const searchQuery = ref("");

const numberedPrices = computed<NumberedPriceRow[]>(() => {
  let n1 = 0;
  let n12 = 0;
  let n123 = 0;

  return (prices as PriceRow[]).map((row, sourceIndex) => {
    let numbering = "";

    if (row.type === "header") {
      n1 += 1;
      n12 = 0;
      n123 = 0;
      numbering = `${n1}.`;
    } else if (
      row.type === "row" ||
      row.type === "row-price-from" ||
      row.type === "group"
    ) {
      n12 += 1;
      numbering = `${n1}.${n12}`;
      if (row.type === "group") {
        n123 = 0;
      }
    } else if (row.type === "group-price" || row.type === "group-price-from") {
      n123 += 1;
      numbering = `${n1}.${n12}.${n123}`;
    }

    return {
      ...row,
      numbering,
      sourceIndex,
    };
  });
});

const displayedPrices = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  const rows = numberedPrices.value;

  if (!query) {
    return rows;
  }

  const includeIndexes = new Set<number>();
  let currentHeaderIndex = -1;

  rows.forEach((row, index) => {
    if (row.type === "header") {
      currentHeaderIndex = index;
    }

    const isMatch = row.value.toLowerCase().includes(query);
    if (isMatch) {
      includeIndexes.add(index);
      if (currentHeaderIndex >= 0) {
        includeIndexes.add(currentHeaderIndex);
      }
    }
  });

  return rows.filter((_, index) => includeIndexes.has(index));
});

function getQLinksGroup(): QuickLink[] {
  return numberedPrices.value
    .filter((row) => row.type === "header")
    .map((row) => ({
      value: row.value,
      link: `#group-of-prices-${row.sourceIndex}`,
    }));
}

function formatPriceNumber(price: number): string {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<style scoped>
.mv-services-page {
  padding-bottom: 2rem;
}

.mv-warning {
  top: 56px;
  z-index: 1015;
}

.mv-service-actions {
  top: 96px;
  z-index: 1010;
  display: grid;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.mv-search-wrap {
  max-width: 520px;
}

.mv-table-wrap {
  max-height: 75vh;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
}

thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background: #f8fafc;
}

tbody tr:nth-child(even) {
  background: rgba(21, 101, 192, 0.04);
}

@media (max-width: 991px) {
  .mv-warning {
    top: 52px;
  }

  .mv-service-actions {
    top: 92px;
  }
}
</style>
