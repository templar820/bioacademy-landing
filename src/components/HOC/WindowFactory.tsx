import React, {lazy, Suspense} from 'react';
import {Button, Typography} from '@mui/material';
import MobXRouterDecorator from '$components/HOC/MobXRouterDecorator';
import {MOBXDefaultProps, RouterEnum} from '$types';
import PageNotFound from '$components/system/PageNotFound';
import useRedirectAuth from '$hooks/useRedirectAuth';
import NotificationManager from '../../helpers/NotificationManager';
import {SnackType} from '../../model/Notifications/PageNotification';
import { useRootService } from '$hooks/useRootService';
import {useTranslation} from "react-i18next";

const AuthLayout = lazy(() => import(/* webpackChunkName:'AuthLayout' */'$components/layouts/AuthLayout'));
const SignIn = lazy(() => import(/* webpackChunkName:'SignIn' */'$components/Auth/SignIn'));
const SignUp = lazy(() => import(/* webpackChunkName:'SignUp' */'$components/Auth/SignUp'));
const ResetPassword = lazy(() => import(/* webpackChunkName:'ResetPassword' */'$components/Auth/ResetPassword'));
const ConfirmWindow = lazy(() => import(/* webpackChunkName:'ConfirmWindow' */'$components/Auth/ConfirmWindow'));
const SendPasswordEmail = lazy(() => import(/* webpackChunkName:'SendPasswordEmail' */'$components/Auth/SendPasswordEmail'));
const AuthCard = lazy(() => import(/* webpackChunkName:'AuthCard' */'$components/cards/AuthCard'));


export enum WindowType {
  NotFoundPage,
  Error,
  SignIn,
  SignUp,
  ConfirmUser,
  ConfirmPassword,
  ResetPassword
}

interface ConfirmWindowFactoryProps extends MOBXDefaultProps {
  type: WindowType;
}

function WindowFactory(props: ConfirmWindowFactoryProps) {
  const services = useRootService();
  const {t} = useTranslation();
  switch (props.type) {
    case WindowType.NotFoundPage:
      return (
        <Suspense fallback={null}>
          <PageNotFound action={(
            <Button
              className="p-4"
              variant="outlined"
              color="success"
              onClick={() => {
                props.history.push('/');
              }}
            >
              {t("window_factory.to_main_page")}
            </Button>
          )}
          />
        </Suspense>
      
      );
    case WindowType.Error:
      return (
        <Suspense fallback={null}>
          <PageNotFound
            key={2}
            statusCode={400}
            title={<Typography variant="subtitle1" className="my-2">{t("window_factory.error")}</Typography>}
            description={<Typography variant="subtitle1" className="my-2">{t("window_factory.sorry_error")}</Typography>}
            action={(
              <a href="." style={{textDecoration: "none"}}>
                <Button
                  className="px-4 py-2"
                  variant="contained"
                  color="success"
                >
                  <Typography variant={"button"} color={"white"}>
                    {t("window_factory.to_main_page")}
                  </Typography>
                </Button>
              </a>
            )}
          />
        </Suspense>
      
      );
    case WindowType.SignIn:
      return (
        <Suspense fallback={null}>
          <AuthLayout>
            <AuthCard>
              <SignIn/>
            </AuthCard>
          </AuthLayout>
        </Suspense>
      );
    case WindowType.SignUp:
      return (
        <Suspense fallback={null}>
          <AuthLayout>
            <AuthCard>
              <SignUp/>
            </AuthCard>
          </AuthLayout>
        </Suspense>
      );
    case WindowType.ResetPassword:
      return (
        <Suspense fallback={null}>
          <AuthLayout>
            <AuthCard>
              <SendPasswordEmail/>
            </AuthCard>
          </AuthLayout>
        </Suspense>
      );
    case WindowType.ConfirmUser:
      return (
        <Suspense fallback={null}>
          <AuthLayout>
            <AuthCard hideImage>
              <ConfirmWindow
                label={t("window_factory.mailIsConfirmed")}
                message={t("window_factory.account_is_activated")}
                buttonLabel={t("auth.authorization")}
                hook={() => {
                  useRedirectAuth();
                }}
                onSubmit={() => {
                  props.history.push(RouterEnum.HOME);
                  props.history.push(RouterEnum.SIGNIN);
                }}
                onSubmitError={async () => {
                  const {
                    token,
                  } = props.match.params;
                  try {
                    const {data} = await services.ArticlesService.apiService.api.authControllerResetConfirm({
                      token,
                    });
                    NotificationManager.Snack.open({
                      snacktype: SnackType.Success,
                      message: t("window_factory.mailIsDelivered"),
                    });
                  } catch (e) {
                    NotificationManager.Snack.open({
                      snacktype: SnackType.Error,
                      message: e.error.message,
                    });
                  }
                }}
                useEffect={() => {
                  const {
                    token,
                  } = props.match.params;
                  return services.ArticlesService.apiService.api.authControllerConfirm({
                    token,
                  });
                }}
              />
            </AuthCard>
          </AuthLayout>
        </Suspense>
      );
    case WindowType.ConfirmPassword:
      return (
        <Suspense fallback={null}>
          <AuthLayout>
            <AuthCard>
              <ResetPassword/>
            </AuthCard>
          </AuthLayout>
        </Suspense>
      );
    default:
      return null;
  }
}

export default MobXRouterDecorator(WindowFactory);
