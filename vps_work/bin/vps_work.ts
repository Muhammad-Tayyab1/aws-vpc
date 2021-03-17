#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { VpsWorkStack } from '../lib/vps_work-stack';

const app = new cdk.App();
new VpsWorkStack(app, 'VpsWorkStack');
