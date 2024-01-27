<template>
  <div class="popups-container">
    <template v-for="[type, config] in Object.entries(popups)">
      <component
        :is="mapTypeComponent[type]"
        v-if="!!config.component"
        :key="type"
        :component="config.component"
        :props-data="config.propsData"
        :is-forward-pointer-events-further="
          !!config.isForwardPointerEventsFurther
        "
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { onBeforeUnmount, ref } from 'vue';

import { PopupsContainerModel } from '@/popup-service';
import { CenterTopSlimWrapper } from '@/popup-service/components/CenterTopSlimWrapper/CenterTopSlimWrapper';
import { CenterWrapper } from '@/popup-service/components/CenterWrapper/CenterWrapper';
import { PromoPopupWrapper } from '@/popup-service/components/PromoPopupWrapper/PromoPopupWrapper';
import { RightTopBottomCenterSlimWrapper } from '@/popup-service/components/RightTopBottomCenterSlimWrapper/RightTopBottomCenterSlimWrapper';
import { ScreenWrapper } from '@/popup-service/components/ScreenWrapper/ScreenWrapper';
import { PopupsService } from '@/popup-service/model/PopupsService';
import { TOpenedPopups } from '@/popup-service/model/PopupsService';

// eslint-disable-next-line no-undef
defineOptions({
  name: 'PopupsContainer',
});

const unsubscribe$ = new Subject<boolean>();
const popups = ref({} as TOpenedPopups);

const mapTypeComponent: Record<string, object> = {
  [PopupsContainerModel.ETypeWrapper.PROMO]: PromoPopupWrapper,
  [PopupsContainerModel.ETypeWrapper.CENTER]: CenterWrapper,
  [PopupsContainerModel.ETypeWrapper.CENTER_TOP_SLIM]: CenterTopSlimWrapper,
  [PopupsContainerModel.ETypeWrapper.RIGHT_TOP_BOTTOM_CENTER_SLIM]:
    RightTopBottomCenterSlimWrapper,
  [PopupsContainerModel.ETypeWrapper.SCREEN]: ScreenWrapper,
};

PopupsService.openedPopupsStream$
  .pipe(takeUntil(unsubscribe$))
  .subscribe((openedPopups) => {
    requestAnimationFrame(() => {
      popups.value = { ...openedPopups };
    });
  });

onBeforeUnmount(() => {
  unsubscribe$.next(true);
  unsubscribe$.complete();
});
</script>
