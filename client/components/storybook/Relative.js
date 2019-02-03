import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';
import { Absolute, Card, Flag, Image, Relative, Text } from '../index';

storiesOf('Relative', module)
  .add('Around an Image and an absolutely positioned Flag', () => (
    <Relative width={1 / 2}>
      <Absolute top={8} left={0}>
        <Flag>Hello Flag</Flag>
      </Absolute>
      <Image src="https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg" />
    </Relative>
  ))
  .add('Around Text and an absolutely positioned Icon', () => (
    <Card m={2}>
      <Relative p={4}>
        <Text mt={2} textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          nisl dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec quis nisi ac est elementum consequat a eu risus. Phasellus id
          facilisis nulla. Aliquam vel semper enim, id lobortis dolor. Morbi sed
          leo at turpis rutrum posuere. Nullam tincidunt ex vitae mi sagittis,
          vel sollicitudin lectus viverra. Curabitur sit amet fringilla velit.
        </Text>
        <Absolute top="10px" right="10px">
          <Icon name={x} color="gray" size={24} />
        </Absolute>
      </Relative>
    </Card>
  ));
